import PropTypes from 'prop-types';
import style from './PeopleList.module.css'

const PeopleList = ({people}) => {
    return(
        <div className={style.HeroList__container}>
            {
                people.map(({name, id, img}) =>
                    <div key={id} className={style.HeroList__item}>
                        <img src={img} alt={name} className={style.HeroList__photo}/>
                        <p className={style.HeroList__name}>{name}</p>
                    </div>)
            }
        </div>
    )
}

export default PeopleList