import ChooseSide from "../../components/HomePage/ChooseSide";
import style from './HomePage.module.css'

const HomePage = () => {
    return(
        <div className={style.home_page}>
            <ChooseSide />
        </div>
    )
}

export default HomePage