import UiVideo from "../Ui/UiVideo";
import errorVideo from './video/coverr-wild-horses-6062-1080p.mp4'
import style from './ErrorMessage.module.css'

const ErrorMessage = () => {
    return(
        <>
            <p className={style.errorMessage__text}>
                The dark side of the force has won.<br />
                We cannot display data.<br />
                Come back when we fix everything
            </p>
            <UiVideo src={errorVideo} classes={style.errorMessage__video}
            playbackRate={1.0}/>
        </>
    )
}

export default ErrorMessage