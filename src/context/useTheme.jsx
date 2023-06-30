
import { createContext, useContext, useState } from "react";
import { changeCSSvariables } from "../services/changeCSSvariables";



const ThemeContext = createContext('light')


const ThemeProvider = ({ children, ...props }) => {

    const [theme, setTheme] = useState(null);

    const change = (nameTheme) => {
        setTheme(nameTheme)
        changeCSSvariables(nameTheme)
    }

    return (
        <ThemeContext.Provider
            value={{
                theme: theme,  // значение берется из useState 
                change: change,  // тут значение - метод change
            }}
            {...props}
            >
            
            {children}
             
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;

//==========   это созданный мною хук, для использования context ===========////
export const useTheme =()=> useContext(ThemeContext);