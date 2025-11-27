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


// create with createElement
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


// create with tagString
const list2 = document.querySelector('.list2')
const markup = array.map(item => `<li class='item'> ${item} </li>`).join('')
list2.innerHTML = markup
// console.log(list2.innerHTML);


// Створити та додати колекцію кнопок з динамічними даними з масиву об’єктів. 
// використати метод createElement

const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
  ];

const colorPickerContainer = document.querySelector('.js-color-picker');
const buttonsMarkup = colorPickerOptions
.map(item => `<button style='background-color: ${item.color};' type="button">${item.label}</button>`)
.join('')
colorPickerContainer.insertAdjacentHTML('beforeend', buttonsMarkup)
// console.log(buttonsMarkup);

//atributes

const imgElement = document.querySelector('.image')
// do not use
imgElement.getAttribute('alt')
imgElement.setAttribute('alt', 'New alt')
//use
console.log(imgElement.hasAttribute('name'));
console.log(imgElement.removeAttribute('alt'));