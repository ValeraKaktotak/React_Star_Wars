import style from './FavoritePage.module.css'
import {useSelector} from "react-redux";

const FavoritePage = () => {
    const stateData = useSelector(store => store.favorite)
    console.log(stateData)
    return(
        <div>
            Favorite Page
        </div>
    )
}

export default FavoritePage