import {useDispatch} from "react-redux";
import PropTypes from "prop-types";
import { addPersonToFavorite, removePersonToFavorite } from '../../../store/actions'
import style from './PersonPhoto.module.css'


const PersonPhoto = ({photo, name, id}) => {
    const dispatch = useDispatch()
    const setPerson = () => {
        dispatch(addPersonToFavorite({
            [id]:{
                name: name,
                photo: photo
            }
        }))
    }
    const removePerson = () => {
        dispatch(removePersonToFavorite(id))
    }
    return(
        <div className={style.personPhoto}>
            <img className={style.personPhoto__img} src={photo} alt={name}/>
            <button onClick={setPerson}>Set person</button>
            <button onClick={removePerson}>Remove person</button>
        </div>
    )
}

PersonPhoto.prototype = {
    photo: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string
}
export default PersonPhoto