import style from './SearchPageInfo.module.css'
import {Link} from "react-router-dom";

const SearchPageInfo = ({people}) => {
    return (
        <div>
            {people.length ?
                <ul className={style.pageInfo__list}>
                    {people.map(({name, id, img}) => (
                        <li key={id} className={style.pageInfo__item}>
                            <Link to={`/people/${id}`}>
                                <img className={style.pageInfo__image} src={img} alt={name}/>
                                <p className={style.pageInfo__name}>{name}</p>
                            </Link>
                        </li>
                    ))}
                </ul> :
                <h1 className={style.pageInfo__comment}>No data</h1>
            }
        </div>
    )
}

export default SearchPageInfo