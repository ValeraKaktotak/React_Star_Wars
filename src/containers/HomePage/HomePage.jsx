import ChooseSide from "../../components/HomePage/ChooseSide";
import style from './HomePage.module.css'

const HomePage = () => {
    return(
        <div className={style.home_page}>
            <h1 className="header__text">Home Page</h1>
            <ChooseSide />
        </div>
    )
}

export default HomePage