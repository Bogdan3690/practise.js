const btn = document.querySelector('.button')
btn.addEventListener('click', onClick)
function onClick(event){
    document.body.style.backgroundColor = 'yellow'
    event.target.style.backgroundColor = 'blue'
}

//  2

const h2 = document.querySelector('.text')
const btn2 = document.querySelector('.second-button')
btn2.addEventListener('click', onChangeButtonClick)
function onChangeButtonClick(){
    h2.classList.add('title')
}