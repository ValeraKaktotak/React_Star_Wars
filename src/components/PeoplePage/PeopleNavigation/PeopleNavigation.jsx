import style from './PeopleNavigation.module.css'
import {Link} from "react-router-dom";
import {SWAPI_PAGE_NUMBER, API_PEOPLE} from "../../../constants/api";

const PeopleNavigation = ({pageCount, getApiData}) => {
    const page = SWAPI_PAGE_NUMBER
    console.log(pageCount)
    const handleChangePrev = () => {
        getApiData(API_PEOPLE+(pageCount-1))
    }
    const handleChangeNext = () => {
        getApiData(API_PEOPLE+(pageCount+1))
    }
    return(
        <div className={style.navigator}>

            <Link to={`/people${page}${pageCount-1}`}>
                <button onClick={handleChangePrev}>
                    PREVIOUS
                </button>
            </Link>
            <Link to={`/people${page}${pageCount+1}`}>
                <button onClick={handleChangeNext}>
                    NEXT
                </button>
            </Link>
        </div>
    )
}

export default PeopleNavigation