import { useRef, useState } from "react";

export function usePlayVideo () {
    const [playVideo, setPlayVideo] = useState(false)

    const videoRef = useRef();

    const handleVideo = () => {
        setPlayVideo((prevPlayVideo) => !prevPlayVideo)

        if(playVideo) {
            videoRef.current.pause()
        } else {
            videoRef.current.play()
        }
    }

    return { playVideo, handleVideo, videoRef }
}