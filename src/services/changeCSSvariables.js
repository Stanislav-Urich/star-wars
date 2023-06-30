
// формат CSS переменной : 
// --theme-default-Уникальное имя # дефолтная переменная
// --theme-light-  Уникальное имя # для 'light'
// --theme-dark-   Уникальное имя #      'dark'
// --theme-neutral-Уникальное имя #      'neutral'




export const changeCSSvariables = (theme) => {

    const root = document.querySelector(':root');

    // root.style.setProperty('--theme-default-header', `var(--theme-${theme}-header)`)
    // root.style.setProperty('--theme-default-bgimg', `var(--theme-${theme}-bgimg)`)

    const cssVariables = ['header', 'bgimg']

    cssVariables.forEach( element => {
        root.style.setProperty(
            `--theme-default-${element}`, 
            `var(--theme-${theme}-${element})`
        )
    })

}