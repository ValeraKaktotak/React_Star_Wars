import cn from 'classnames'
import {useTheme} from "../../../context/ThemeProvider";
import {THEME_NEUTRAL, THEME_LIGHT, THEME_DARK} from "../../../constants/theme";
import lightSide from './images/jedi1.jpg'
import darkSide from './images/dartveider2.jpg'
import ravenSide from './images/reven3.jpg'
import style from './ChooseSide.module.css'

const ChooseSideItem = ({img, text, theme, classes}) => {
    const isTheme = useTheme()

    return (
        <div onClick={() => {
            isTheme.changeTheme(theme)
        }} className={cn(style.item, classes)}>
            <img className={style.item__img} src={img} alt={text}/>
            <div className={style.item__text}>{text}</div>
        </div>
    )
}

const ChooseSide = () => {
    const elements = [
        {
            theme: THEME_LIGHT,
            text: 'Light Side',
            img: lightSide,
            classes: style.item__light
        },
        {
            theme: THEME_DARK,
            text: 'Dark Side',
            img: darkSide,
            classes: style.item__dark
        },
        {
            theme: THEME_NEUTRAL,
            text: 'Raven Side',
            img: ravenSide,
            classes: style.item__raven
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
                    classes={element.classes}
                />
            ))}
        </div>
    )
}

export default ChooseSide