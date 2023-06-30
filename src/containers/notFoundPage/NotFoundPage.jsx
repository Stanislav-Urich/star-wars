import { useLocation } from 'react-router-dom'

import img from './../../static/404error.jpg'
import style from './style.module.css'

const NotFoundPage = () => {

    let location = useLocation()

    return (
        <>
            <img className={style.error} src={img} alt='Not Found'/>
                <p className={style.text}>  No Match for <u>{location.pathname}</u></p>
            
        </>
    );
}

export default NotFoundPage;