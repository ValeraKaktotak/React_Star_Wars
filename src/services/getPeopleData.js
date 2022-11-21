import {
    HTTPS, SWAPI_PEOPLE, SWAPI_ROOT,
    GUIDE_IMG_EXTENSION, URL_IMG_PERSON, SWAPI_PAGE_NUMBER
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

//-----------------------------------------------
// Функция получение помера страницы с URL адреса
//-----------------------------------------------
export const getPeoplePageCount = (url) => {
    const pos = url.lastIndexOf(SWAPI_PAGE_NUMBER);
    const id = url.slice(pos+SWAPI_PAGE_NUMBER.length, url.length);

    return Number(id);
}
