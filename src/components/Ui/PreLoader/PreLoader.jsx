import style from './PreLoader.module.css'
import svg from './images/three-dots.svg'

const PreLoader = () => {
    return(
        <div className={style.preloader}>
            <img src={svg} alt="loader"/>
        </div>
    )
}

export default PreLoader