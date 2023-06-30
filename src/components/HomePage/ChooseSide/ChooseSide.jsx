
import { useTheme } from "../../../context/useTheme";
import { DARK_THEME, LIGHT_THEME, NEUTRAL_THEME } from "../../../context/constants";
import light from './img/light-side.jpg'
import dark from './img/dark-side.jpg'
import neutral from './img/falcon.jpg'

import cn from 'classnames'
import style from './style.module.css';




const ChooseSide = () => {

    //  ========  тут будет приходить объект с полями theme, change ====== //    
    const isTheme = useTheme()


    const side = [
        {
            side: 'light',
            theme: LIGHT_THEME,
            img: light,
            text: 'lihgt side',
            classes: style.item__light,
        },
        {
            side: 'dark',
            theme: DARK_THEME,
            img: dark,
            text: 'dark side',
            classes: style.item__dark,
        },
        {
            side: 'neutral',
            theme: NEUTRAL_THEME,
            img: neutral,
            text: 'neutral side',
            classes: style.item__neutral,
        },
    ]



    return (
        <div className={style.wrapper}>
            <h2 >Home page</h2>

            {/* <img className={style.img_side} src={light} onClick={() => isTheme.change(LIGHT_THEME)} alt="light-side" />
            <img className={style.img_side} src={dark} onClick={() => isTheme.change(DARK_THEME)} alt="dark-side" />
            <img className={style.img_side} src={neutral} onClick={() => isTheme.change(NEUTRAL_THEME)} alt="falcon" /> */}

            <div className={style.container}>
                {side.map((el) => {
                    return (
                        <div className={cn(style.item, el.classes)}>
                            <img className={cn(style.img_side, el.classes)} src={el.img} alt={el.side} onClick={() => isTheme.change(el.theme)} />
                            <div className={cn(style.text, el.classes)}>{el.text}</div>
                        </div>
                    );
                })}
            </div>






        </div>
    );
}

export default ChooseSide; 