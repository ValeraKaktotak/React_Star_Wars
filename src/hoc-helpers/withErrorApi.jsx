import {useState} from "react";
import style from "../containers/PeoplePage/PeoplePage.module.css";

const withErrorApi = (Component) => {
    const Container = (props) => {
        const[errorApi, setErrorApi] = useState(false)
        if(errorApi){
            return <h2 className={style.error}>ERROR</h2>
        }
        else
        return(
            <Component setErrorApi={setErrorApi} {...props} />
        )
    }
    return Container
}

export default withErrorApi
