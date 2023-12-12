const fortuneCookie = document.querySelector('.fortuneCookie')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTryAgain = document.querySelector('.btnTryAgain')
const fortuneMessage = document.querySelector('.fortuneMessage')
const message = [
    'A vida trará coisas boas se tiver paciência.',
    'Não compense na ira o que lhe falta na razão.',
    'A maior de todas as torres começa no solo.',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Siga os bons e aprenda com eles.',
    'Aquele que se importa com o sentimento dos outros, não é um tolo.',
    'O riso é a menor distância entre duas pessoas.',
    'Os defeitos são mais fortes quando o amor é fraco.',
    'Espere pelo mais sábio dos conselhos: o tempo.'
]

fortuneCookie.addEventListener('click', handleClick)
btnTryAgain.addEventListener('click', handleTryClick)
document.addEventListener('keypress', pressEnter)

function handleClick() {
    toggleScreen()
    pickMessage()
}

function handleTryClick() {
    toggleScreen()
}

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function pickMessage() {
    let allMessages = message.length
    let randomMessage = Math.floor(Math.random() * allMessages)  
    fortuneMessage.innerText = `${message[randomMessage]}`
}

function pressEnter(event) {
    if(event.key == 'Enter') {
        toggleScreen()
        pickMessage()
    }
} 