import PropTypes from 'prop-types';
import style from './PeopleList.module.css'
import {Link} from "react-router-dom";

const PeopleList = ({people}) => {
    return(
        <div className={style.HeroList}>
            {
                people.map(({name, id, photo}) =>
                    <Link to={`/people/${id}`} key={id} className={style.HeroList__item}>
                        <img src={photo} alt={name} className={style.HeroList__photo}/>
                        <p className={style.HeroList__name}>{name}</p>
                    </Link>)
            }
        </div>
    )
}
PeopleList.propTypes = {
    people: PropTypes.array
}

export default PeopleList