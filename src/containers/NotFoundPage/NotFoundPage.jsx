import {useLocation} from "react-router";
import img from './images/page404.png'
import style from './NotFoundPage.module.css'

const NotFoundPage = () => {
    const currentUrl = useLocation()
    console.log(currentUrl)
    return(
        <div className={style.not_found_page}>
            <img src={img} alt="404"/>
            <div className={style.not_found_page__text}>
                No math for <span className={style.not_found_page__yellow}>{currentUrl.pathname}</ span>
            </div>
        </div>
    )
}

export default NotFoundPage