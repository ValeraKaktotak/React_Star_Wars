import {useParams} from "react-router-dom";
import React, {useEffect, useState, Suspense} from "react";
import PersonInfo from "../../components/PersonPage/PersonInfo";
import PersonPhoto from "../../components/PersonPage/PersonPhoto";
//import PersonFilms from "../../components/PersonPage/PersonFilms";
import PersonLinkBack from "../../components/PersonPage/PersonLinkBack";
import PreLoader from "../../components/Ui/PreLoader";
import withErrorApi from "../../hoc-helpers/withErrorApi";
import {getApiResource} from "../../utils/network";
import {getPeopleImg} from "../../services/getPeopleData";
import {API_PERSON} from "../../constants/api";
import style from './PersonPage.module.css'


const PersonFilms = React.lazy(() => import('../../components/PersonPage/PersonFilms'));


const PersonPage = ({setErrorApi}) => {
    let [person, setPerson] = useState(null)
    let [personImg, setPersonImg] = useState(null)
    let [personName, setPersonName] = useState(null)
    let [personFilms, setPersonFilms] = useState(null)
    let [isLoading, setIsLoading] = useState(false)
    let id = useParams().id

    useEffect(()=>{
        (async()=>{
            let res = await getApiResource(API_PERSON+id)
            if(res){
                setPerson([
                    {title: 'Birth year', data: res.birth_year},
                    {title: 'Eye color', data: res.eye_color},
                    {title: 'Gender', data: res.gender},
                    {title: 'Hair color', data: res.hair_color},
                    {title: 'Height', data: res.height},
                    {title: 'Mass', data: res.mass},
                    {title: 'Skin color', data: res.skin_color},
                ])
                setPersonName(res.name)
                res.films.length && setPersonFilms(res.films)
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
                    <PersonLinkBack />
                    <h1 className={style.personPage__name}>{personName}</h1>
                    <div className={style.personPage__infoBlock}>
                        {personImg && <PersonPhoto photo={personImg} name={personName} />}
                        {person && <PersonInfo personData={person} />}
                        {personFilms &&(
                            <Suspense fallback={<PreLoader />}>
                                <PersonFilms personFilms={personFilms} />
                            </Suspense>
                            )}
                    </div>
                </div>
            }
        </div>
    )
}

export default withErrorApi(PersonPage)