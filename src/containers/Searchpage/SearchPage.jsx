import {useState} from "react";
import withErrorApi from "../../hoc-helpers/withErrorApi";
import {getApiResource} from "../../utils/network";
import {API_SEARCH, SWAPI_PEOPLE} from "../../constants/api";
import style from './SearchPage.module.css'

const SearchPage = ({setErrorApi}) => {
    const [searchValue, setSearchValue] = useState('')

    const getResponse = async (param) => {
        const searchResponse = await getApiResource(API_SEARCH+param)
        if(searchResponse){
            setErrorApi(false)
            console.log(searchResponse.results)
        }else{
            setErrorApi(true)
        }
    }

    const handleInputChange = (e) =>{
        setSearchValue(e.target.value)
        getResponse(e.target.value)
    }
    return(
        <>
            <h1 className="header__text">Search Page</h1>
            <input
                type="text"
                value={searchValue}
                onChange={handleInputChange}
                placeholder="Input characters names"
            />
        </>
    )
}

export default withErrorApi(SearchPage)