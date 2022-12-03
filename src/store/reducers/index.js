import {combineReducers} from "redux";
import favoriteReducer from './favorite-reducer'

const rootStore = combineReducers({
    favorite: favoriteReducer
})

export default rootStore