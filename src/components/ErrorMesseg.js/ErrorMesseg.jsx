import UiVideo from '../UI/UiVideo/UiVidei';

import video from './video/han-solo.mp4';

import style from './ErrorMes.module.css';



const ErrorMesseg = () => {
    return (
        <>
            <p className={style.error_mes}>
                I am so sorry <br />
                but ERROR on this page
            </p>

            <UiVideo src={video} classes={style.video} playbackRate={0.5} />
        </>
    );
}

export default ErrorMesseg;