// const imgElement = document.querySelector('.image')
// console.log(imgElement);
// console.log(imgElement.src);
// console.log(imgElement.alt)
// imgElement.alt = 'Nature'
// console.log(imgElement.alt)
// imgElement.width = '150'
// console.log(imgElement.width)

// const imgElements = document.querySelectorAll('.image')
// const listElement = document.querySelector('.site-nav')
// const linkElement = document.querySelector('a[href="https://"]')
// console.log(listElement.classList.add('new-class'));

// linkElement.textContent = 'hello'
// linkElement.style.border = '2px solid green'

// const firstItem = listElement.firstElementChild
// firstItem.textContent = '<a href="">New item</a>'
// firstItem.style.backgroundColor = 'yellow'



const item = document.createElement('li')
item.classList.add('nav-item')
const link = document.createElement('a')
link.classList.add('list-link')
link.textContent = 'Main page'
console.log(link);
console.log(item);
item.prepend(link);
const list = document.querySelector('.list')
list.prepend(item);

const array = [
    'Main page',
    'Blog',
    'Contacts'
]
let itemsArr = []
for (const item of array) {
    const navItem = document.createElement('li')
    console.log(item);
    navItem.textContent = item
    console.log(navItem);
    itemsArr.push(navItem)
}
    list.append(...itemsArr);
    console.log(itemsArr);
    