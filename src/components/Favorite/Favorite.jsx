import style from './Favorite.module.css'
import bookmark from './images/favorite_bookmark.svg'

const Favorite = () => {
    return(
        <div className={style.bookmark__container}>
            <span className={style.bookmark__counter}>0</span>
            <img className={style.bookmark__img} src={bookmark} alt="bookmark"/>
        </div>
    )
}
export default Favorite