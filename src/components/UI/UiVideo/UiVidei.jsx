import PropTypes from 'prop-types'
import { useRef, useEffect } from 'react'

import cn from 'classnames'
import style from './style.module.css'

const UiVideo = ({
    src,
    classes,
    playbackRate=1.0
}) => {

    const refVideo = useRef(null)

    useEffect( ()=> {
        refVideo.current.playbackRate = playbackRate
    }, [] )



    return (
        <video
            loop                   // в этом бараметре будет задача проигрывать видео постоянно
            autoPlay                // отвечает за то, чтобы видео сразу начинало воспроизв
            muted                   //  откл звук
            className={cn(style.video__Error, classes)}
            ref={refVideo}
        >
            <source src={src} />
        </video>
    );
}


UiVideo.propTypes = {
    src: PropTypes.string,
    classes: PropTypes.string,
    playbackRate: PropTypes.number,
}


export default UiVideo;