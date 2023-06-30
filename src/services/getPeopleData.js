import { SWAPI_PEOPLE, HTTPS, SWAPI_ROOT, URL_IMG_PERSON, IMG_EXTENSION, SWAPI_PARAM_PAGE } from "../constants/Api"


//ФУНКЦИЯ ПРИНИМ URL и вычисляет текущее положение страницы
export const getPeoplePageId = url => {
  const postion = url.lastIndexOf(SWAPI_PARAM_PAGE);
  const id = url.slice(postion+SWAPI_PARAM_PAGE.length, url.length);
 
  return Number(id); 
 
}



const getId = (url, category)=>{
    const id = url
    .replace(HTTPS+SWAPI_ROOT+category, '')
    .replace(/\//g, '')
  return id;
}

// const getId = (url) => {
//   // Разделяем URL на части по символу "/"
//   const urlParts = url.split("/");
//   // Получаем последнюю часть URL, которая должна содержать ID
//   const id = urlParts[urlParts.length - 2];
//   return id;
// };




export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE);



export const getPeopleImg =(id)=> `${URL_IMG_PERSON}/${id+IMG_EXTENSION}`;
