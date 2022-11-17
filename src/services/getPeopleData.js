import {
    HTTPS, SWAPI_PEOPLE, SWAPI_ROOT,
    GUIDE_IMG_EXTENSION, URL_IMG_PERSON
} from "../constants/api";

//-----------------------------------------------
// Общая ф-ция получения ID
//-----------------------------------------------
const getId = (url, category) => {
    const id = url.replace(HTTPS + SWAPI_ROOT + category, '').replace(/\//g, '')
    return id
}

//-----------------------------------------------
// Получить ID персонажа по URL
//-----------------------------------------------
export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE)

//-----------------------------------------------
// Получить изображение для персонажа
//-----------------------------------------------
export const getPeopleImg = (id) => URL_IMG_PERSON+id+GUIDE_IMG_EXTENSION
