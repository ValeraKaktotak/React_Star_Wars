import {NavLink} from "react-router-dom";
import cn from 'classnames'
import Favorite from "../Favorite";
import style from './Header.module.css'

const Header = () => {
    return(
        <div className={style.container}>
            <NavLink className={cn("header__text", style.link)} to="/">Home</NavLink>
            <NavLink className={cn("header__text", style.link)} to="/people?page=1">People</NavLink>
            <NavLink className={cn("header__text", style.link)} to="/favorite">Favorites</NavLink>
            <NavLink className={cn("header__text", style.link)} to="/not-found">Not Found</NavLink>
            <NavLink className={style.favorite}  to="/favorite"><Favorite /></NavLink>
        </div>
    )
}

export default Header