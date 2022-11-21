import style from './PeopleNavigation.module.css'
import {Link} from "react-router-dom";
import {SWAPI_PAGE_NUMBER, API_PEOPLE} from "../../../constants/api";

const PeopleNavigation = ({pageCount, getApiData, peopleCount}) => {
    const page = SWAPI_PAGE_NUMBER
    const peoplePageCount = Math.ceil(peopleCount / 10)
    const handleChangePrev = () => {
        getApiData(API_PEOPLE+(pageCount-1))
    }
    const handleChangeNext = () => {
        getApiData(API_PEOPLE+(pageCount+1))
    }
    return(
        <div className={style.navigator}>

            <Link to={`/people${page}${pageCount-1}`}>
                <button onClick={handleChangePrev} disabled={pageCount <= 1}>
                    PREVIOUS
                </button>
            </Link>
            <Link to={`/people${page}${pageCount+1}`}>
                <button onClick={handleChangeNext} disabled={pageCount >= peoplePageCount}>
                    NEXT
                </button>
            </Link>
        </div>
    )
}

export default PeopleNavigation