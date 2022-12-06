import {useTheme} from "../../../context/ThemeProvider";
import {THEME_NEUTRAL, THEME_LIGHT, THEME_DARK} from "../../../constants/theme";
import style from './ChooseSide.module.css'

const ChooseSide = () => {
    const theme = useTheme()
    return (
        <div>
            <button onClick={()=>{theme.changeTheme(THEME_LIGHT)}}>1</button>
            <button onClick={()=>{theme.changeTheme(THEME_DARK)}}>2</button>
            <button onClick={()=>{theme.changeTheme(THEME_NEUTRAL)}}>3</button>
        </div>
    )
}

export default ChooseSide