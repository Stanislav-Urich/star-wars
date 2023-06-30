import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import style from './people.module.css'


const PeopleList = ({ people }) => {
   
    return (
        <ul className={style.list_container}>
            {people.map(({ id, name, foto }) =>
                <li className={style.list_item} key={id}>
                    <Link to={`/people/${id}`} >
                        <img className={style.foto} src={foto} alt="foto" />
                        <p>{name}</p>
                    </Link>
                </li>
            )}
        </ul>

    )
}

PeopleList.propTypes = {
    people: PropTypes.array.isRequired
}

export default PeopleList;