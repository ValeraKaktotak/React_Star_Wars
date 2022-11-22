import style from './PersonPhoto.module.css'

const PersonPhoto = ({photo}) => {
    return(
        <div>
            <img src={photo} alt="#"/>
        </div>
    )
}
export default PersonPhoto