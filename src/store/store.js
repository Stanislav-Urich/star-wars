
import { createStore } from 'redux';
import rootReducer from './reducers/index'

import {composeWithDevTools} from 'redux-devtools-extension'
import { setLocalStorage } from '../utils/localStorage';


const store = createStore(rootReducer, composeWithDevTools() );

export default store;


store.subscribe( ()=> {
    setLocalStorage('state', store.getState().favoriteReducer.favorites)
    // console.log(store.getState().favoriteReducer);
})



// import {createStore} from 'redux'
// import rootReducers from './reducers'




//////////////////
    // программа будет заходить в папку с редюсерами и брать оттуда indexed.js и рутРедюсер будет иметь значения combineReducers
/////////////////

// const store = createStore(rootReducers)

// export default store;