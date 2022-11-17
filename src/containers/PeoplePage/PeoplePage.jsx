import {useEffect, useState} from "react";
import {getApiResource} from "../../utils/network";
import {API_PEOPLE} from "../../constants/api";
import {getPeopleId, getPeopleImg} from "../../services/getPeopleData";
import PeopleList from "../../components/PeoplePage/PeopleList";
import withErrorApi from "../../hoc-helpers/withErrorApi";


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

export default withErrorApi(PeoplePage);