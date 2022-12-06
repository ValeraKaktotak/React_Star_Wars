
export const changeCssVariables = (theme) => {
    //выбираем элемент :root в котором лежат все наши css переменные
    const root = document.querySelector(':root')

    //меняем значение css переменной
    root.style.setProperty('--theme-default-header-color', `var(--theme-${theme}-header)`)
    root.style.setProperty('--theme-default-background', `var(--theme-${theme}-background)`)
}