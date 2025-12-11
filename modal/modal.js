/*
    1) Відкрити та закрити за допомогою кнопки
    2) Закрити за кліком у бекдроп: onBackDropClick
    3) Закрити за допомогою ESC: onEscapeKeypress
У CSS є клас show-modal, який необхідно додати до body при відкритті модалки 
 */

const openBtn = document.querySelector(['button[data-action="open-modal"'])
const closeBtn = document.querySelector(['button[data-action="close-modal"'])
const jsBackdrop = document.querySelector('.js-backdrop')

openBtn.addEventListener('click', onOpenBtnClick)
closeBtn.addEventListener('click', onCloseBtnClick)
jsBackdrop.addEventListener('click', onBackDropClick)

function onOpenBtnClick(){
    document.body.classList.add('show-modal')
    document.addEventListener('keydown', onEsc)
}

function onCloseBtnClick(){
    onCloseModal()
}

function onBackDropClick(even){
    if (even.target === even.currentTarget) {
        onCloseModal()
    }
    console.log(even.target);
    console.log(even.currentTarget);
}

function onCloseModal(){
    document.removeEventListener('keydown', onEsc)
    document.body.classList.remove('show-modal')
}

// console.log(openBtn.dataset);
// console.log(openBtn.dataset.action);
// openBtn.style.color=openBtn.dataset.color

function onEsc(event){
    console.log(event.code);
    if (event.code === 'Escape') {
        onCloseModal()
    }
}