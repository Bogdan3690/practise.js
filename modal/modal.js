/*
    1) Відкрити та закрити за допомогою кнопки
    2) Закрити за кліком у бекдроп: onBackDropClick
    3) Закрити за допомогою ESC: onEscapeKeypress
У CSS є клас show-modal, який необхідно додати до body при відкритті модалки 
 */

const openBtn = document.querySelector(['button[data-action="open-modal"'])
const closeBtn = document.querySelector(['button[data-action="close-modal"'])
openBtn.addEventListener('click', onOpenBtnClick)
function onOpenBtnClick(){
    document.body.classList.add('show-modal')
}
closeBtn.addEventListener('click', onCloseBtnClick)
function onCloseBtnClick(){
    document.body.classList.remove('show-modal')
}

const jsBackdrop = document.querySelector('.js-backdrop')
jsBackdrop.addEventListener('click', onBackDropClick)
function onBackDropClick(even){
    if (even.target === even.currentTarget) {
    document.body.classList.remove('show-modal')
    }
    console.log(even.target);
    console.log(even.currentTarget);
}
