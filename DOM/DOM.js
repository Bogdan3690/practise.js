// const imgElement = document.querySelector('.image')
// console.log(imgElement);
// console.log(imgElement.src);
// console.log(imgElement.alt)
// imgElement.alt = 'Nature'
// console.log(imgElement.alt)
// imgElement.width = '150'
// console.log(imgElement.width)

const imgElements = document.querySelectorAll('.image')
const listElement = document.querySelector('.site-nav')
const linkElement = document.querySelector('a[href="https://"]')
console.log(listElement.classList.add('new-class'));

linkElement.textContent = 'hello'
linkElement.style.border = '2px solid green'

const firstItem = listElement.firstElementChild
firstItem.textContent = '<a href="">New item</a>'
firstItem.style.backgroundColor = 'yellow'