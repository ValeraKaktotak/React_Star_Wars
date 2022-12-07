import { omit } from 'lodash'
import {getLocalStorageData} from "../../utils/localStorage";
import {ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_TO_FAVORITE} from "../constans/actionTypes";

//подтягиваем данные с локал стора
const initState = getLocalStorageData('store')

const favoriteReducer = (state=initState, action) => {
    switch (action.type){
        case ADD_PERSON_TO_FAVORITE:
            return ({
                ...state, ...action.payload
            })
        case REMOVE_PERSON_TO_FAVORITE:
            return omit(state, [action.payload])
        default: return state
    }
}

export default favoriteReducer