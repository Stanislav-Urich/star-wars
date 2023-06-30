import { combineReducers } from "redux"

import favoriteReducer from "./favoriteReducer"


// export const rootReducer = combineReducers({
//   favoriteReducer
// });


export default combineReducers ({
    favoriteReducer : favoriteReducer, // тут можно соркатить запись - просто для наглядности
})

 