import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import PersonInfo from "../../components/PersonPage/PersonInfo";
import PreLoader from "../../components/PreLoader";
import withErrorApi from "../../hoc-helpers/withErrorApi";
import {getApiResource} from "../../utils/network";
import {getPeopleImg} from "../../services/getPeopleData";
import {API_PERSON} from "../../constants/api";
import style from './PersonPage.module.css'
import PersonPhoto from "../../components/PersonPage/PersonPhoto";

const PersonPage = ({setErrorApi}) => {
    let [person, setPerson] = useState(null)
    let [personImg, setPersonImg] = useState(null)
    let [personName, setPersonName] = useState(null)
    let [isLoading, setIsLoading] = useState(false)
    let id = useParams().id

    useEffect(()=>{
        (async()=>{
            let res = await getApiResource(API_PERSON+id)
            if(res){
                setPerson([
                    {title: 'birth_year', data: res.birth_year},
                    {title: 'eye_color', data: res.eye_color},
                    {title: 'gender', data: res.gender},
                    {title: 'hair_color', data: res.hair_color},
                    {title: 'height', data: res.height},
                    {title: 'home_world', data: res.homeworld},
                    {title: 'mass', data: res.mass},
                    {title: 'skin_color', data: res.skin_color},
                ])
                setPersonName(res.name)
                setPersonImg(getPeopleImg(id))
                setIsLoading(true)
                setErrorApi(false)
            }else{
                setErrorApi(true)
            }
        })()
    }, [])


    return(
        <div className={style.personPage}>
            {!isLoading ?
                <PreLoader/>:
                <div className={style.wrapper}>
                    <h1 className={style.personPage__name}>{personName}</h1>
                    <div className={style.personPage__infoBlock}>
                        <PersonPhoto photo={personImg} name={personName} />
                        <PersonInfo personData={person} />
                    </div>
                </div>
            }
        </div>
    )
}

export default withErrorApi(PersonPage)