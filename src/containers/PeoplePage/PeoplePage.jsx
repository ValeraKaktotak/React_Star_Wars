import {useEffect, useState} from "react";
import {getApiResource} from "../../utils/network";
import {API_PEOPLE} from "../../constants/api";
import {getPeopleId, getPeopleImg} from "../../services/getPeopleData";
import PeopleList from "../../components/PeoplePage/PeopleList";
import style from './PeoplePage.module.css'


const PeoplePage = () => {
    const [people, setPeople] = useState(null)

    const getResources = async (url) => {
        let people = await getApiResource(url)
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
    }

    useEffect(() => {
        getResources(API_PEOPLE)
    }, [])

    return (
        <div className={style.people_page}>
            {people && <PeopleList people={people} />}
        </div>
    );
}

export default PeoplePage;