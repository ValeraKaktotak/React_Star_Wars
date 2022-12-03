import {ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_TO_FAVORITE} from "../constans/actionTypes";

export const addPersonToFavorite = (person) => ({
    type: ADD_PERSON_TO_FAVORITE,
    payload: person
})

export const removePersonToFavorite = (id) => ({
    type: REMOVE_PERSON_TO_FAVORITE,
    payload: id
})