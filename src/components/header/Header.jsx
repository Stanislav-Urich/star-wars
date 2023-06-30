import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";


import { DARK_THEME, LIGHT_THEME, NEUTRAL_THEME } from './../../context/constants'
import dark from './img/dart_vaider.png';
import light from './img/djeday.png';
import neutral from './img/star_death.png';
import { useTheme } from "../../context/useTheme";
import Favorite from "../favorite/Favorite";

import style from './style.module.css'



const Header = () => {

    const isTheme = useTheme()

    const [icon, setIcon] = useState(light)

    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.search);

    useEffect(() => {
        setActiveLink(location.search);
    }, [location]);


    useEffect(() => {


        switch (isTheme.theme) {
            case LIGHT_THEME: setIcon(light); break;
            case DARK_THEME: setIcon(dark); break;
            case NEUTRAL_THEME: setIcon(neutral); break;

            default: setIcon(light)

        }
    }, [isTheme])

    return (
        <div className={style.wrapper}>

            <img className={style.logo} src={icon} alt="star wars" />

            <ul className={style.list__container}>
                <li>
                    <NavLink to='/' exact> Home </NavLink>
                </li>
                <li>
                    <NavLink to='/people?page=1' > People </NavLink>
                </li>
                <li>
                    <NavLink to='/search' exact> Search </NavLink>
                </li>
                <li>
                    <NavLink to='/notfound' exact> Not Found </NavLink>
                </li>
                <li>
                    <NavLink to='/fail' exact> Fail </NavLink>
                </li>


            </ul>

            <Favorite />

        </div>
    );
}

export default Header;