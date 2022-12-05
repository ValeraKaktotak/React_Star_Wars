import style from './ChooseSide.module.css'
import {THEME_NEUTRAL, THEME_LIGHT, THEME_DARK} from "../../../constants/theme";
import {useTheme} from "../../../context/ThemeProvider";

const ChooseSide = () => {
    const neutral = THEME_NEUTRAL
    const theme = useTheme()
    return (
        <div>
            Choose Side
            <br />
            {theme.theme}
            <br />
            <button onClick={()=>{theme.changeTheme(THEME_LIGHT)}}>1</button>
            <button onClick={()=>{theme.changeTheme(THEME_DARK)}}>2</button>
            <button onClick={()=>{theme.changeTheme(THEME_NEUTRAL)}}>3</button>
        </div>
    )
}

export default ChooseSide