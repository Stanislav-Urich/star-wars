import PropType from 'prop-types'

import style from './style.module.css'
import { useState, useEffect } from 'react';
import { makeConurrentRequest } from '@utils/network'




const Films = ({ personFilms }) => {

    const [filmsNames, setFilmsNames] = useState([])

    useEffect(() => {
        (async () => {

            const data = await makeConurrentRequest(personFilms)


            setFilmsNames(data);

        })();

    }, []
    )

    return (
        <div className={style.wrapper}>
            <ul className={style.list__container}>
                {filmsNames 
                    .sort((a, b) => a.episode_id - b.episode_id)
                    .map(({ title, episode_id }) => (
                        <li className={style.list__item} key={episode_id} >
                            <span className={style.episode}>
                               episode: {episode_id}  
                            </span>
                            <span className={style.colon}> : </span>
                            <span className={style.title}>{title}</span>
                        </li>
                    ))}
            </ul>
        </div>

    )
}

Films.propType = {
    personFilm: PropType.array,
}

export default Films;