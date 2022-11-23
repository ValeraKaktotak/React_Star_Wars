import style from './PersonPhoto.module.css'
import PropTypes from "prop-types";

const PersonPhoto = ({photo, name}) => {
    return(
        <div>
            <img src={photo} alt={name}/>
        </div>
    )
}

PersonPhoto.prototype = {
    photo: PropTypes.string,
    name: PropTypes.string
}
export default PersonPhoto