import PropTypes from "prop-types";
import style from './UiInput.module.css'

const UiInput = ({
     value,
     handleInputChange,
     placeholder,
     classes
}) => {
    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={handleInputChange}
                placeholder={placeholder}
            />
        </div>
    )
}

UiInput.propTypes = {
    value: PropTypes.string,
    handleInputChange: PropTypes.func,
    placeholder: PropTypes.string,
    classes: PropTypes.string
}

export default UiInput