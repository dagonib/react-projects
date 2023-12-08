import { useSelector, useDispatch } from 'react-redux'
import { useRef, useState, useEffect } from 'react'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { app } from '../firebase'
import { useFormData } from '../hooks/useFormData'
import { 
    updateUserStart, 
    updateUserSuccess, 
    updateUseFailure, 
    deleteUserFailure,
    deleteUserSuccess,
    deleteUserStart
} from '../redux/user/user.slice'


export default function Profile() {
  const { formData, handleChange, handleUploadComplete } = useFormData()
  const { currentUser, loading, error } = useSelector(state => state.user)
  const fileRef = useRef(null)
  const dispatch = useDispatch()

  const [file, setFile] = useState(undefined)
  const [filePerc, setFilePerc] = useState(0)
  const [fileUploadError, setFileUploadError] = useState(false)
  const [updateSuccess, setUpdateSuccess] = useState(false)
  
  useEffect(() => {
    if(file) {
      handleFileUpload(file)
    }
  }, [file])

  const handleFileUpload = (file) => {
    const storage = getStorage(app)
    const fileName = new Date().getTime() + file.name
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setFilePerc(Math.round(progress))
      },
      (error) => {
        setFileUploadError(true)
        console.log(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          handleUploadComplete(downloadURL)
        });
      }
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
   
    try {
      dispatch(updateUserStart())
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if (data.success === false) {
        dispatch(updateUseFailure(data.message))
        return
      }
      dispatch(updateUserSuccess(data))
      setUpdateSuccess(true)
    } catch (error) {
      dispatch(updateUseFailure(error.message))
    }
  }

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart())
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      });

      const data = await res.json()
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message))
        return
      }
      dispatch(deleteUserSuccess(data))
    } catch (error) {
      dispatch(deleteUserFailure(error.message))
    }
  }
  
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1> 

      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input 
          onChange={(e) => setFile(e.target.files[0])} 
          type='file' 
          ref={fileRef} 
          hidden 
          accept='image/*' 
        />
        <img 
          onClick={() => { fileRef.current.click()} } 
          src={formData.avatar || currentUser.avatar} 
          alt="profile" 
          className="w-24 h-24 rounded-full object-cover cursor-pointer self-center" 
        />

        <p className='text-sm self-center'>
          {fileUploadError ? (
              <span className='text-red-700'>Error uploading file (image must be less than 2MB)</span>
          ) : filePerc > 0 && filePerc < 100 ? (
              <span className='text-slate-700'>{`Uploading ${filePerc}%`}</span>
          ): filePerc === 100 ? (
              <span className='text-green-700'>Image succesfully uploaded!</span>
          ) : (
              ""
          )}
        </p>

        <input 
          type='text' 
          placeholder='username' 
          defaultValue={currentUser.username} 
          id='username' 
          className='borde rounded-lg p-3' 
          onChange={handleChange}
        />

        <input 
          type='email' 
          placeholder='email' 
          defaultValue={currentUser.email}
          id='email' 
          className='borde rounded-lg p-3' 
          onChange={handleChange}
        />

        <input  
          type='password' 
          placeholder='password' 
          id='password' 
          className='borde rounded-lg p-3' 
          onChange={handleChange}
        />
        
        <button 
          disabled={loading}
          className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Update'}
        </button>

      </form>

      <div className='flex justify-between mt-5'>
        <span onClick={handleDeleteUser} className='text-red-700 cursor-pointer'>Delete account</span>
        <span className='text-red-700 cursor-pointer'>Sign out</span>
      </div>
      <p className='text-red-700 mt-5'>{error ? error : ""}</p>
      <p className='text-green-700 mt-5'>{updateSuccess ? "User is updated succesfully" : ""}</p>
    </div>
  )
}
