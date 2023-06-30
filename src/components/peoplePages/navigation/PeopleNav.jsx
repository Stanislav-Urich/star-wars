import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import style from './style.module.css'
import UiButton from '../../UI/UI_Button/UiButton'

const PeopleNav = ({ getResours, nextPage, prevPage, counterPage }) => {

    const changePrev = () => getResours(prevPage)
    const changeNext = () => getResours(nextPage)

    return (

        <div className={style.container}>
            <Link className={style.link} to={`/people/?page=${counterPage - 1}`}>
                <UiButton
                    text='previous'
                    disabled={!prevPage}
                    onClick={changePrev}
                  
                />
            </Link>
            <Link className={style.link} to={`/people/?page=${counterPage + 1}`}>
                <UiButton
                   text='next'
                    disabled={!nextPage}
                    onClick={changeNext}
                    
                   
                />
                    
               
            </Link>
        </div>
    );
}


PeopleNav.propTypes = {
    getResours: PropTypes.func,
    nextPage: PropTypes.string,
    prevPage: PropTypes.string,
    counterPage: PropTypes.number,
    
}

export default PeopleNav;