import style from './PersonPhoto.module.css'
import PropTypes from "prop-types";

const PersonPhoto = ({photo, name}) => {
    return(
        <div className={style.personPhoto}>
            <img className={style.personPhoto__img} src={photo} alt={name}/>
        </div>
    )
}

PersonPhoto.prototype = {
    photo: PropTypes.string,
    name: PropTypes.string
}
export default PersonPhoto