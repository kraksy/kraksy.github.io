
const button = document.querySelector('.button')

const anims = () => {
    anime({
        targets: button,
        translateX: 250
    })
}

button.addEventListener('mouseover', anims)
