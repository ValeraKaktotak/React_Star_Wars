import style from './PersonInfo.module.css'
import PropTypes from "prop-types";

const PersonInfo = ({personData}) => {

    return (
        <div className={style.personData}>
            {personData.map(({title, data}) => {
                return <div className={style.personData__item} key={title}>
                    <span className={style.personData__name}>
                        {title}
                    </span>: {data}
                </div>
            })}
        </div>
    )
}

PersonInfo.prototype = {
    personData: PropTypes.array
}

export default PersonInfo