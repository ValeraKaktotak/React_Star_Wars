//common
export const HTTP = 'http://'
export const HTTPS = 'https://'

//SWAPI

//export const SWAPI_ROOT = 'swapi.dev/api/'
//export const SWAPI_ROOT = 'www.swapi.tech/api/'
export const SWAPI_ROOT = 'swapi.dev/api/'
export const SWAPI_PEOPLE = 'people/'
export const SWAPI_PAGE_NUMBER = '?page='
export const SWAPI_SEARCH_PARAM = '?search='
export const API_PEOPLE = HTTPS+SWAPI_ROOT+SWAPI_PEOPLE+SWAPI_PAGE_NUMBER
export const API_PERSON = HTTPS+SWAPI_ROOT+SWAPI_PEOPLE
export const API_SEARCH = HTTPS+SWAPI_ROOT+SWAPI_PEOPLE+SWAPI_SEARCH_PARAM

//visualguide
const GUIDE_ROOT_IMG = 'https://starwars-visualguide.com/assets/img/'
const GUIDE_PEOPLE = 'characters/'
export const GUIDE_IMG_EXTENSION = '.jpg'
export const URL_IMG_PERSON = GUIDE_ROOT_IMG+GUIDE_PEOPLE
