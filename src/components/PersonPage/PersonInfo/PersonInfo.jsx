import style from './PersonInfo.module.css'
import PropTypes from "prop-types";

const PersonInfo = ({personData}) => {

    return(
        <div>
            {personData.map(({title, data})=>{
                return <p key={title}>{title}: {data}</p>
            })}
        </div>
    )
}

PersonInfo.prototype = {
    personData: PropTypes.array
}

export default PersonInfo