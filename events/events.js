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

// 5 dec

const inputEl = document.querySelector('.js-input')
const textEl = document.querySelector('.js-input-text')
inputEl.addEventListener('input', onInputChange)
function onInputChange(ev){
    let value = ev.target.value
    console.log(value);
    textEl.textContent = value
}