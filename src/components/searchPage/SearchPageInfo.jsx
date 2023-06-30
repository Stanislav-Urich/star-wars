
import { Link } from 'react-router-dom'

import style from './style.module.css'


const SearchPageInfo = ({ people }) => {
    return (
        <>
            <ul className={style.container}>
                {people.map(({ id, name, img }) =>
                    <li className={style.list__item} key={id}>
                        <Link to={`/people/${id}`}>
                            <img className={style.persone__foto} src={img} alt={name} />
                            <span className={style.persone__name}>{name}</span>
                        </Link>
                    </li>
                )}

            </ul>
        </>
    );
}

export default SearchPageInfo;