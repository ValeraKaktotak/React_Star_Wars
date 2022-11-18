import {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import withErrorApi from "../../hoc-helpers/withErrorApi";
import PeopleList from "../../components/PeoplePage/PeopleList";
import {getApiResource} from "../../utils/network";
import {getPeopleId, getPeopleImg} from "../../services/getPeopleData";
import {API_PEOPLE} from "../../constants/api";


const PeoplePage = ({setErrorApi}) => {
    const [people, setPeople] = useState(null)

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
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
    }

    useEffect(() => {
        getApiData(API_PEOPLE)
    }, [])

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