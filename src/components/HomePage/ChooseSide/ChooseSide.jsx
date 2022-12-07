import {useTheme} from "../../../context/ThemeProvider";
import {THEME_NEUTRAL, THEME_LIGHT, THEME_DARK} from "../../../constants/theme";
import lightSide from './images/jedi1.jpg'
import darkSide from './images/dartveider2.jpg'
import ravenSide from './images/reven3.jpg'
import style from './ChooseSide.module.css'

const ChooseSideItem = ({img, text, theme}) => {
    const isTheme = useTheme()

    return (
        <div onClick={() => {
            isTheme.changeTheme(theme)
        }} className={style.item}>
            <img className={style.item__img} src={img} alt={text}/>
            <span className={style.item__text}>{text}</span>
        </div>
    )
}

const ChooseSide = () => {
    const elements = [
        {
            theme: THEME_LIGHT,
            text: 'Light Side',
            img: lightSide
        },
        {
            theme: THEME_DARK,
            text: 'Dark Side',
            img: darkSide
        },
        {
            theme: THEME_NEUTRAL,
            text: 'Raven Side',
            img: ravenSide
        },
    ]
    return (
        <div className={style.wrapper}>
            {elements.map((element)=>(
                <ChooseSideItem
                    key={element.text}
                    theme={element.theme}
                    text={element.text}
                    img={element.img}
                />
            ))}
        </div>
    )
}

export default ChooseSide