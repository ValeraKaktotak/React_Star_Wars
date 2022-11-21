import {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import withErrorApi from "../../hoc-helpers/withErrorApi";
import PeopleList from "../../components/PeoplePage/PeopleList";
import PeopleNavigation from "../../components/PeoplePage/PeopleNavigation";
import {getApiResource} from "../../utils/network";
import {getPeopleId, getPeopleImg, getPeoplePageCount} from "../../services/getPeopleData";
import {useQueryParams} from "../../hooks/useQueryParams";
import {API_PEOPLE} from "../../constants/api";


const PeoplePage = ({setErrorApi}) => {
    let [people, setPeople] = useState(null)

    let queryPageNumber = Number(useQueryParams().get('page'))
    // let [nextPage, setNextPage] = useState(null)
    // let [prevPage, setPrevPage] = useState(null)
    let [pageCount, setPageCount] = useState(queryPageNumber)
    let [peopleCount, setPeopleCount] = useState(false)


    const getApiData = async (url) => {
        let peopleData = await getApiResource(url)
        if (peopleData) {
            const peopleList = peopleData.results.map(({name, url}) => {
                let id = getPeopleId(url)
                let imgUrl = getPeopleImg(id)
                return {
                    id: id,
                    name: name,
                    img: imgUrl
                }
            })
            setPeople(peopleList)
            setPageCount(getPeoplePageCount(url))
            setPeopleCount(peopleData.count)
            // setPrevPage(pageCount - 1)
            // setNextPage(pageCount + 1)
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
    }

    useEffect(() => {
        getApiData(API_PEOPLE+queryPageNumber)
    }, [])

    return (
        <>
            <PeopleNavigation
                pageCount={pageCount}
                // nextPage={nextPage}
                // prevPage={prevPage}
                getApiData={getApiData}
                peopleCount={peopleCount}
            />
            {people && <PeopleList people={people}/>}
        </>
    );
}
PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);