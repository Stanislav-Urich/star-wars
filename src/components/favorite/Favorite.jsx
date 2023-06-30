import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

import favor from './img/favor.svg'


import style from './style.module.css'


const Favorite = () => {

    const stateData = useSelector(state => state.favoriteReducer.favorites)

    const [count, setCount] = useState()

    useEffect(() => {
        const length = stateData.length
        setCount(length)
    })

    let displayCount = count
    if (count > 99) {
        displayCount = '...'
    }

    return (
        <div className={style.container__favorite}>
            <Link to='/favorites' exact>
                <span className={style.counter}>{displayCount}</span>
                <img className={style.favorite__header} src={favor} alt="FAVORITE" />
            </Link>

        </div>
    );
}

export default Favorite;