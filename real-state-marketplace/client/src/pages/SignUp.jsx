import { Link, useNavigate } from 'react-router-dom'
import { useFormData } from '../hooks/useFormData.js'
import { useFormHandling } from '../hooks/useFormHandling.js'

export default function SignUp() {
  const { formData, handleChange } = useFormData()
  const { error, loading, handleAsyncFunction, setErrorHandler } = useFormHandling()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await handleAsyncFunction(async () => {
        const res = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        })

        const data = await res.json();
        
        if (data.success === false) {
          throw new Error('An error occurred')
        }
        navigate('/sign-in')
      })
    } catch (catchedError) {
      setErrorHandler('An error occurred')
    }
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="text" placeholder="username" className="border rounded-lg p-3" id="username" onChange={handleChange} />  

            <input type="email" placeholder="email" className="border rounded-lg p-3" id="email" onChange={handleChange} />  

            <input type="password" placeholder="password" className="border rounded-lg p-3" id="password" onChange={handleChange} />  

            <button 
              disabled={loading} 
              className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-80 disabled:opacity-80"
            >{loading ? 'Loading...' : 'Sign Up'}</button>
        </form>

        <div className='flex gap-2 mt-5'>
          <p>Have an account?</p>
          <Link to={"'/sign-in"}>
            <span className='text-blue-700'>Sign in</span>
          </Link> 
        </div>

        {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
