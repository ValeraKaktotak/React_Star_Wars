import {useCallback, useEffect, useState} from "react";
import {debounce} from "lodash";
import withErrorApi from "../../hoc-helpers/withErrorApi";
import SearchPageInfo from "../../components/SearchPage/SearchPageInfo";
import UiInput from "../../components/Ui/UiInput";
import {getApiResource} from "../../utils/network";
import {getPeopleId, getPeopleImg} from "../../services/getPeopleData";
import {API_SEARCH} from "../../constants/api";
import style from './SearchPage.module.css'

const SearchPage = ({setErrorApi}) => {
    const [searchValue, setSearchValue] = useState('')
    const [people, setPeople] = useState([])

    const getResponse = async (param) => {
        const searchResponse = await getApiResource(API_SEARCH+param)
        if(searchResponse){
            const peopleList = searchResponse.results.map(({name, url})=>{
                const id = getPeopleId(url)
                const img = getPeopleImg(id)
                return (
                    {
                        id,
                        name,
                        img
                    }
                )
            })
            setPeople(peopleList)
            setErrorApi(false)
        }else{
            setErrorApi(true)
        }
    }

    useEffect(()=>{
        getResponse('')
    },[])

    const debounceGetResponse = useCallback(
        debounce((value)=> getResponse(value), 300),
        []
    )

    const handleInputChange = (value) =>{
        setSearchValue(value)
        debounceGetResponse(value)
    }
    return(
        <>
            <h1 className="header__text">Search Page</h1>
            <UiInput
                value={searchValue}
                handleInputChange={handleInputChange}
                placeholder="Input characters names"
                classes={style.input__search}
            />
            <SearchPageInfo people={people} />
        </>
    )
}

export default withErrorApi(SearchPage)