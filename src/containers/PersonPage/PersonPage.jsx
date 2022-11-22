import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import PreLoader from "../../components/PreLoader";
import withErrorApi from "../../hoc-helpers/withErrorApi";
import {getApiResource} from "../../utils/network";
import {API_PERSON} from "../../constants/api";
import style from './PersonPage.module.css'

const PersonPage = ({setErrorApi}) => {
    let [person, setPerson] = useState(null)
    let [isLoading, setIsLoading] = useState(false)
    let id = useParams().id

    useEffect(()=>{
        (async()=>{
            let res = await getApiResource(API_PERSON+id)
            if(res){
                setPerson(res)
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
                <div>
                    {person.name}
                </div>
            }
        </div>
    )
}

export default withErrorApi(PersonPage)