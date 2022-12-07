
export const changeCssVariables = (theme) => {
    //выбираем элемент :root в котором лежат все наши css переменные
    const root = document.querySelector(':root')

    // //меняем значение css переменной
    // root.style.setProperty('--theme-default-header', `var(--theme-${theme}-header)`)
    // root.style.setProperty('--theme-default-background', `var(--theme-${theme}-background)`)

    const cssVariables = ['header', 'background']
    cssVariables.map((item)=>{
        root.style.setProperty(
            `--theme-default-${item}`,
            `var(--theme-${theme}-${item})`)

    })
}