import cn from 'classnames'
import {useEffect, useRef} from "react";
import style from './UiVideo.module.css'


const UiVideo = ({
    src,
    classes,
    playbackRate = 1.0
 }) => {
    const videoRef = useRef()

    useEffect(()=>{
        videoRef.current.playbackRate = playbackRate;
    }, [])

    return(
        <video
            ref={videoRef}
            loop
            autoPlay
            muted
            className={cn(style.video__wrapper ,classes)}>
            <source src={src} />
        </video>
    )
}

export default UiVideo