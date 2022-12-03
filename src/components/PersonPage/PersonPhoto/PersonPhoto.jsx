import {useDispatch} from "react-redux";
import PropTypes from "prop-types";
import { addPersonToFavorite, removePersonToFavorite } from '../../../store/actions'
import white_star from './images/star-white.svg'
import gold_star from './images/star-gold.svg'
import style from './PersonPhoto.module.css'


const PersonPhoto = ({photo, name, id, favoritePerson, setFavoritePerson}) => {
    const dispatch = useDispatch()

    const dispatchFavoritePerson = () => {
        if(favoritePerson){
            setFavoritePerson(false)
            dispatch(removePersonToFavorite(id))
        }else{
            setFavoritePerson(true)
            dispatch(addPersonToFavorite({
                [id]:{
                    name: name,
                    photo: photo
                }
            }))
        }
    }

    return(
        <div className={style.personPhoto}>
            <img className={style.personPhoto__img} src={photo} alt={name}/>
            <img
                onClick={dispatchFavoritePerson}
                className={style.personPhoto__favoriteStar}
                src={favoritePerson? gold_star: white_star}
                alt="add/remove to favorite"
            />
        </div>
    )
}

PersonPhoto.prototype = {
    photo: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    favoritePerson: PropTypes.bool,
    setFavoritePerson: PropTypes.func
}
export default PersonPhoto