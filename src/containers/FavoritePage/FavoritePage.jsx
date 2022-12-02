import {useSelector} from "react-redux";
import style from './FavoritePage.module.css'

const FavoritePage = () => {
    const favoritePersons = useSelector(store => store.favorite)
    console.log(favoritePersons)
    return(
        <div>
            Favorite
        </div>
    )
}

export default FavoritePage