import {useState} from "react";
import withErrorApi from "../../hoc-helpers/withErrorApi";
import SearchPageInfo from "../../components/SearchPage/SearchPageInfo";
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
            {people.map((element)=>{
                return <SearchPageInfo key={element.id} {...element} />
            })}
        </>
    )
}

export default withErrorApi(SearchPage)