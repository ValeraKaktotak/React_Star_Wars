import style from './SearchPageInfo.module.css'
import {Link} from "react-router-dom";

const SearchPageInfo = ({people}) => {
    return(
        <div>
            {people.length?
                <ul>
                    {people.map(({name, id, img})=>(
                        <Link key={id} to={`/people/${id}`} >
                            <li>
                                <img src={img} alt={name}/>
                                <p>{name}</p>
                            </li>
                        </Link>
                    ))}
                </ul>:
                <h1>No data</h1>
            }
        </div>
    )
}

export default SearchPageInfo