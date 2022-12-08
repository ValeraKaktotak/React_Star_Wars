import PropTypes from "prop-types";
import cn from 'classnames'
import closeIcon from './images/close.svg'
import style from './UiInput.module.css'

const UiInput = ({
     value,
     handleInputChange,
     placeholder,
     classes
}) => {
    return (
        <div className={cn(style.input__wrapper, classes)}>
            <input
                type="text"
                value={value}
                onChange={(e)=>handleInputChange(e.target.value)}
                placeholder={placeholder}
                className={style.input}
            />
            <img
                src={closeIcon}
                alt="close"
                className={cn(style.input__clear, !value && style.input__clear_disabled)}
                onClick={() => value && handleInputChange('')}
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