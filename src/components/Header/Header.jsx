import {NavLink} from "react-router-dom";
import cn from 'classnames'
import {useEffect, useState} from "react";
import {useTheme} from "../../context/ThemeProvider";
import Favorite from "../Favorite";
import {THEME_NEUTRAL, THEME_LIGHT, THEME_DARK} from "../../constants/theme";
import lightIcon from './images/jedi.svg'
import darkIcon from './images/sith.svg'
import neutralIcon from './images/rebel.svg'
import style from './Header.module.css'

const Header = () => {
    const [logoImg, setLogoImg] = useState(null)
    const isTheme = useTheme()

    useEffect(()=>{
        switch (isTheme.theme){
            case THEME_LIGHT:
                setLogoImg(lightIcon)
                break;
            case THEME_DARK:
                setLogoImg(darkIcon)
                break;
            case THEME_NEUTRAL:
                setLogoImg(neutralIcon)
                break;
            default: setLogoImg(neutralIcon)
        }
    },[isTheme])
    return(
        <div className={style.container}>
            <div className={style.logo}>
                <img src={logoImg} alt="logo"/>
            </div>
            <NavLink className={cn("header__text", style.link)} to="/">Home</NavLink>
            <NavLink className={cn("header__text", style.link)} to="/people?page=1">People</NavLink>
            <NavLink className={cn("header__text", style.link)} to="/search">Search</NavLink>
            <NavLink className={cn("header__text", style.link)} to="/not-found">Not Found</NavLink>
            <NavLink className={style.favorite}  to="/favorite"><Favorite /></NavLink>
        </div>
    )
}

export default Header