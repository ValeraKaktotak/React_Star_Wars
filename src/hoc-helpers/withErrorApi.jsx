import {useState} from "react";
import style from "../containers/PeoplePage/PeoplePage.module.css";
import ErrorMessage from "../components/ErrorMessage";

const withErrorApi = (Component) => {
    const Container = (props) => {
        const[errorApi, setErrorApi] = useState(false)
        if(errorApi){
            return <ErrorMessage />
        }
        else
        return(
            <Component setErrorApi={setErrorApi} {...props} />
        )
    }
    return Container
}

export default withErrorApi
