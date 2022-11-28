import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {makeConcurrentRequest} from "../../../utils/network";
import style from './PersonFilms.module.css'

const PersonFilms = ({ personFilms }) => {
    let [filmData, setFilmData] = useState(null)

    useEffect(() => {
        (async () => {
            let result = await makeConcurrentRequest(personFilms)
            setFilmData(result)
        })();
    }, []);
    return(
        <div className={style.personalFilms}>
            {filmData && filmData
                .sort((a,b) => a.episode_id - b.episode_id)
                .map(({ title, episode_id }) => {
                return <div className={style.personFilms__item} key={episode_id}>
                    <span className={style.item__episode}>Episode {episode_id}</span>
                    <span className={style.item__colon}>:</span>
                    <span className={style.item__title}>{title}</span>
                </div>
            })}
        </div>
    )
}

PersonFilms.propTypes = {
    personFilms: PropTypes.array
}

export default PersonFilms