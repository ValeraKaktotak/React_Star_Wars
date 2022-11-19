import {NavLink} from "react-router-dom";
import cn from 'classnames'
import style from './Header.module.css'

const Header = () => {
    return(
        <div className={style.container}>
            <NavLink className={cn("header__text", style.link)} to="/">Home</NavLink>
            <NavLink className={cn("header__text", style.link)} to="/people">People</NavLink>
            <NavLink className={cn("header__text", style.link)} to="/not-found">Not Found</NavLink>
        </div>
    )
}

export default Header