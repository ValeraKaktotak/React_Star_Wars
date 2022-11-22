import style from './PersonPage.module.css'
import {useParams} from "react-router-dom";

const PersonPage = () => {
    let param = useParams()
    console.log(param)
    return(
        <div className={style.personPage}>
            Person
        </div>
    )
}

export default PersonPage