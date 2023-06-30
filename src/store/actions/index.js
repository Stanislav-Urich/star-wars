import { ADD_FAVORITE_PERSON, REMOVE_FAVORITE_PERSON } from "../constants/actionsTypes"

// функция для сохранения закладок в stor
//-----------------------------//

export const setFavoritePerson = (person) => ({
    type: 'ADD_FAVORITE_PERSON',
    payload: person,
})


// удаление персонажей 
//-----------------------------//


export const removeFavoritePersone = (id) => ({
    type: 'REMOVE_FAVORITE_PERSON',
    payload: id,
})