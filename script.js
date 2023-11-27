const firstScreen = document.querySelector('.firstScreen')
const secondScreen = document.querySelector('.secondScreen')

firstScreen.addEventListener('click', handleClick)

function handleClick() {
    firstScreen.classList.toggle('hide')
    secondScreen.classList.toggle('hide')
}

const resetBtn = document.querySelector('#resetBtn')

resetBtn.addEventListener('click', handleResetBtn)

function handleResetBtn() {
    firstScreen.classList.toggle('hide')
    secondScreen.classList.toggle('hide')

}