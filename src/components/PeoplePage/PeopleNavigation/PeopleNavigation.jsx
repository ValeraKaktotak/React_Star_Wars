import style from './PeopleNavigation.module.css'
import {Link} from "react-router-dom";
import {SWAPI_PAGE_NUMBER, API_PEOPLE} from "../../../constants/api";
import UiButton from "../../Ui/UiButton";

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
            <Link className={style.navigator__link} to={`/people${page}${pageCount-1}`}>
                <UiButton text='PREVIOUS'
                          onClick={handleChangePrev}
                          disabled={pageCount <= 1}
                />
            </Link>
            <Link className={style.navigator__link} to={`/people${page}${pageCount+1}`}>
                <UiButton text='NEXT'
                          onClick={handleChangeNext}
                          disabled={pageCount >= peoplePageCount}
                />
            </Link>
        </div>
    )
}

export default PeopleNavigation