import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';

import img_fill from './img/star-fill.svg'
import img from './img/star.svg'

import { setFavoritePerson, removeFavoritePersone } from './../../../store/actions'


import style from './style.module.css'




const PersonFoto = ({ personFoto, name, peopleId, personeFavorite, setPersoneFavorite }) => {

    const dispatch = useDispatch();


    const dispatchFavoritePeople = () => {
        if (personeFavorite) {
            dispatch(removeFavoritePersone(peopleId))
            setPersoneFavorite(false)
        } else {
            dispatch(setFavoritePerson(

                {
                    id: peopleId,
                    name: name,
                    foto: personFoto,
                    
                }
            ))
            setPersoneFavorite(true)
        }
    }



    return (
        <div className={style.container}>

            <img
                className={style.favorite}
                onClick={dispatchFavoritePeople}
                src={personeFavorite ? img_fill : img}
                alt="favotite" />

            <img src={personFoto} className={style.foto} alt={name} />



        </div>
    );
}

PersonFoto.propTypes = {
    personFoto: PropTypes.string,
    personName: PropTypes.string,
}

export default PersonFoto;