import { useNavigate } from 'react-router-dom';

import icon from './img/goBack.png';

import style from './style.module.css'

const GoBackButton = () => {

    const navigate = useNavigate()

const goBackPage = (e)=> {
    e.preventDefault() // необязательно, эта команда отменяет стандартное поведение
    navigate(-1)
}

    return ( 
        <a href="#"
        className={style.link}
        onClick={goBackPage}
        >   
            <img className={style.link__icon} src={icon} alt="Go Back" />
            <span>Go Back</span>
        </a>
     );
}
 
export default GoBackButton;