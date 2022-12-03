import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import PeopleList from "../../components/PeoplePage/PeopleList";
import style from './FavoritePage.module.css'

const FavoritePage = () => {
    const [people, setPeople] = useState(null)
    const favoritePersons = useSelector(store => store.favorite)

    useEffect(()=>{
        const favoriteData = Object.entries(favoritePersons)
        if(favoriteData.length){
            const formatFavoriteData = favoriteData.map(item => {
                return {
                    id: item[0],
                    ...item[1]
                }
            })
            setPeople(formatFavoriteData)
        }
    }, [])

    return(
        <div className={style.favoritePage__container}>
            {
                !people?
                    <span className={style.favoritePage__emptyText}>Список пуст</span>:
                    <PeopleList people={people} />
            }
        </div>
    )
}

export default FavoritePage