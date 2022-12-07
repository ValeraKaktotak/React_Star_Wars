import React, {useContext, useState} from 'react'
import {changeCssVariables} from "../services/changeCssVariables";

const ThemeContext = React.createContext(null)

const ThemeProvider = ({children, ...props}) => {
    const [theme, setTheme] = useState('')
    const changeTheme = name => {
        setTheme(name)
        changeCssVariables(name)
    }

    return(
        <ThemeContext.Provider value={{theme, changeTheme}} {...props}  >
            {children}
        </ThemeContext.Provider >
    )
}

export default ThemeProvider
export const useTheme = () => useContext(ThemeContext)

