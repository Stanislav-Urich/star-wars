import { getLocalStorage } from "../../utils/localStorage";
import { ADD_FAVORITE_PERSON, REMOVE_FAVORITE_PERSON } from "../constants/actionsTypes"




const initialState = {
    favorites: getLocalStorage('state'),
};
console.log(initialState);





const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE_PERSON:

            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }


        case REMOVE_FAVORITE_PERSON:

            return {
                ...state,
                favorites: state.favorites.filter(el => el.id !== action.payload)
            }



        default:
            return state;
    }
}


export default favoriteReducer;