
//  метод создания doc-комментариев, опишем функции

/**
 * принимает URL и отправляет фетч запрос
 * @param {string} url - lkz pfghjcf
 * @returns {Promise} - возвращает промис с результатом запроса
 */

export const getApiResourse = async (url) => {


    try {
        const res = await fetch(url)

        if(!res.ok) {
            console.error('coud not fetch.', res.status);
        
            return false;

        }

        return await res.json()

    } catch (error) {
        console.error('coud not fetch.');
        return false;
    }
};


//  функция, которая будет получать массив URL , и обрабатывать их 

export const makeConurrentRequest = async (url) => {
    const results = await Promise.all(url.map( res=> {
        return fetch(res).then(res => res.json())
    } ))
    
    return results
}