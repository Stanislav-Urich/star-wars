import {useLocation} from 'react-router-dom'



export const useQueryParams = ()=> {
    return (
        new URLSearchParams(useLocation().search)
    )
}


//Эта функция useQueryParams является пользовательским хуком (custom hook) в библиотеке React Router.
//  Она использует хук useLocation из пакета react-router-dom для получения текущего объекта местоположения (location) в приложении.
// Затем функция useQueryParams создает новый экземпляр класса URLSearchParams и передает в него строку запроса из объекта местоположения. 
// Строка запроса содержит параметры, переданные в URL после символа вопроса (?).