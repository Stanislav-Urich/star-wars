export const getLocalStorage =(key)=> {
   const data = localStorage.getItem(key) 

   if (data !== null) {
   
        return JSON.parse(data)
   }
   
   return []
}





export const setLocalStorage =(key, data)=> {
    localStorage.setItem(key, JSON.stringify(data))   // чтобы сохранить сложные структуры данных, такие как объекты или массивы, в localStorage, их необходимо предварительно преобразовать в строку. Сериализация в JSON-строку с помощью JSON.stringify()
}




export const favoriteBtn = () => {
    
}