import {useNavigate} from "react-router";
import img from './img/left-arrow-svgrepo-com.svg'
import style from './PersonLinkBack.module.css'


const PersonLinkBack = () => {

    const navigate = useNavigate()
    const handleGoBack = (e) =>{
        e.preventDefault()
        navigate(-1)
    }
    return(
        <div>
            <a href='#' onClick={handleGoBack} className={style.personLinkBack}>
                <img className={style.personLinkBack__img} src={img} alt="back"/>
                Go Back
            </a>
        </div>
    )
}

export default PersonLinkBack