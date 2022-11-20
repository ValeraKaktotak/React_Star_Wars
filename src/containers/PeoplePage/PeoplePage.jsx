import {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import withErrorApi from "../../hoc-helpers/withErrorApi";
import PeopleList from "../../components/PeoplePage/PeopleList";
import {getApiResource} from "../../utils/network";
import {getPeopleId, getPeopleImg} from "../../services/getPeopleData";
import {useQueryParams} from "../../hooks/useQueryParams";
import {API_PEOPLE} from "../../constants/api";


const PeoplePage = ({setErrorApi}) => {
    const [people, setPeople] = useState(null)

    const queryPageNumber = useQueryParams().get('page')
    let [nextPage, setNextPage] = useState(Number(queryPageNumber) + 1)
    let [prevPage, setPrevPage] = useState(false)


    console.log('next', nextPage)
    console.log('prev', prevPage)

    const getApiData = async (url) => {
        let people = await getApiResource(url)
        if (people) {
            const peopleList = people.results.map(({name, url}) => {
                let id = getPeopleId(url)
                let imgUrl = getPeopleImg(id)
                return {
                    id: id,
                    name: name,
                    img: imgUrl
                }
            })
            setPeople(peopleList)
            if(queryPageNumber > 1){
                setPrevPage(Number(queryPageNumber) - 1)
            }
            setNextPage(Number(queryPageNumber)+1)
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
    }

    useEffect(() => {
        getApiData(API_PEOPLE+queryPageNumber)
    }, [queryPageNumber])

    return (
        <>
            <h1>Navigator</h1>
            {people && <PeopleList people={people}/>}
        </>
    );
}
PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);