import {useDispatch} from "react-redux";
import PropTypes from "prop-types";
import { addPersonToFavorite, removePersonToFavorite } from '../../../store/actions'
import style from './PersonPhoto.module.css'


const PersonPhoto = ({photo, name, id, favoritePerson, setFavoritePerson}) => {
    const dispatch = useDispatch()
    const setPerson = () => {
        setFavoritePerson(true)
        dispatch(addPersonToFavorite({
            [id]:{
                name: name,
                photo: photo
            }
        }))
    }
    const removePerson = () => {
        setFavoritePerson(false)
        dispatch(removePersonToFavorite(id))
    }
    return(
        <div className={style.personPhoto}>
            <img className={style.personPhoto__img} src={photo} alt={name}/>
            {favoritePerson ? <button onClick={removePerson}>Remove person</button>: <button onClick={setPerson}>Set person</button>}
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