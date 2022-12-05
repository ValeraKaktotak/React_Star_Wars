import React, {useContext, useState} from 'react'

const ThemeContext = React.createContext(null)

const ThemeProvider = ({children, ...props}) => {
    const [theme, setTheme] = useState('null')
    const changeTheme = name => {
        setTheme(name)
    }

    return(
        <ThemeContext.Provider value={{theme, changeTheme}} {...props}  >
            {children}
        </ThemeContext.Provider >
    )
}

export default ThemeProvider
export const useTheme = () => useContext(ThemeContext)

