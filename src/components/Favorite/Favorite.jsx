import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import bookmark from './images/favorite_bookmark.svg'
import style from './Favorite.module.css'

const Favorite = () => {
    let [count, setCount] = useState(null)
    let favoriteData = useSelector(state => state.favorite)

    useEffect(() => {
        let keys = Object.keys(favoriteData).length
        keys > 99 ? setCount('...') : setCount(keys)
    }, [favoriteData])

    return (
        <div className={style.bookmark__container}>
            {count ?
                <div className={style.bookmark__counter}>
                    <span>{count}</span>
                </div> : ''
            }
            <img className={style.bookmark__img} src={bookmark} alt="bookmark"/>
        </div>
    )
}
export default Favorite