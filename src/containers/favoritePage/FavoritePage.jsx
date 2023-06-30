import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react';

import PeopleList from '../../components/peoplePages/peopleList/peopleList';

import style from './style.module.css'



const FavoritePage = () => {

    const storeData = useSelector(state => state.favoriteReducer.favorites);

    
     const [people, setPeople] = useState([])
     console.log(people);
    

     useEffect( ()=> {
        setPeople(storeData)

       
     })
 

    return (
        <div>
            <h2 className={style.title}>Favorite Characters</h2>
            {storeData.length === 0 ? (
                <h2 className={style.comment}>No favorite characters yet.</h2>
            ) : (
               <PeopleList people={people}/>               
            )}
        </div>
    );
}

export default FavoritePage;