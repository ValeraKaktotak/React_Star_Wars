import {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import withErrorApi from "../../hoc-helpers/withErrorApi";
import PeopleList from "../../components/PeoplePage/PeopleList";
import PeopleNavigation from "../../components/PeoplePage/PeopleNavigation";
import {getApiResource} from "../../utils/network";
import {getPeopleId, getPeopleImg, getPeoplePageCount} from "../../services/getPeopleData";
import {useQueryParams} from "../../hooks/useQueryParams";
import {API_PEOPLE} from "../../constants/api";
import PreLoader from "../../components/Ui/PreLoader";


const PeoplePage = ({setErrorApi}) => {
    let [people, setPeople] = useState(null)
    let [isLoading, setIsLoading] = useState(false)

    let queryPageNumber = Number(useQueryParams().get('page'))
    let [pageCount, setPageCount] = useState(queryPageNumber)
    let [peopleCount, setPeopleCount] = useState(false)

    const getApiData = async (url) => {
        setIsLoading(true)

        let peopleData = await getApiResource(url)
        if (peopleData) {
            const peopleList = peopleData.results.map(({name, url}) => {
                let id = getPeopleId(url)
                let imgUrl = getPeopleImg(id)
                return {
                    id: id,
                    name: name,
                    photo: imgUrl
                }
            })
            setPeople(peopleList)
            setPageCount(getPeoplePageCount(url))
            setPeopleCount(peopleData.count)
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        getApiData(API_PEOPLE+queryPageNumber)
    }, [])

    return (
        <>
            {!isLoading ?
                <div>
                    <PeopleNavigation
                        pageCount={pageCount}
                        getApiData={getApiData}
                        peopleCount={peopleCount}
                    />
                    {people && <PeopleList people={people}/>}
                    <PeopleNavigation
                        pageCount={pageCount}
                        getApiData={getApiData}
                        peopleCount={peopleCount}
                    />
                </div> :
                <PreLoader/>
            }
        </>
    );
}
PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);