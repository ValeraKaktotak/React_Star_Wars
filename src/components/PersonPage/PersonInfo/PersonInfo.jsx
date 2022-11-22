import style from './PersonInfo.module.css'

const PersonInfo = ({personData}) => {

    return(
        <div>
            {personData.map(({title, data})=>{
                return <p key={title}>{title}: {data}</p>
            })}
        </div>
    )
}

export default PersonInfo