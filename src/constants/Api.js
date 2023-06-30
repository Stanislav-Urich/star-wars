// общие константы

export const HTTPS = 'https://';
export const HTTP = 'http://'

// для  swapi

export const SWAPI_ROOT = 'swapi.dev/api/';
export const SWAPI_PEOPLE = 'people';
export const SWAPI_PARAM_PAGE = '/?page='
export const SWAPI_PARAM_SEARCH ='/?search='

export const PEOPLE_API = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE + SWAPI_PARAM_PAGE;
export const PERSON_API = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE;
export const PERSON_API_SEARCH  = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE+SWAPI_PARAM_SEARCH;


// visual guide

const GUIDE_ROOT_IMG = 'https://starwars-visualguide.com/assets/img/';
const GUIDE_PEOPLE = 'characters'
export const IMG_EXTENSION = '.jpg'

export const URL_IMG_PERSON = GUIDE_ROOT_IMG + GUIDE_PEOPLE;


