import './intro.css'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal } from '../../constants'
import { usePlayVideo } from '../../hooks/usePlayVideo'

export default function Intro () {
    const { playVideo, videoRef, handleVideo } = usePlayVideo()

    return (
        <section className='app__video'>
            <video 
                src={meal}
                ref={videoRef}
                type='video/mp4'
                loop
                controls={false}
                muted
            />

            <div className='app__video-overlay flex__center'>
                <div 
                    className='app__video-overlay_circle flex__center'
                    onClick={handleVideo}
                >

                {playVideo 
                    ? <BsPauseFill color='#FFF' fontSize={30} />
                    : <BsFillPlayFill color='#FFF' fontSize={30} />
                }
                </div>
            </div>
        </section>
    )
}