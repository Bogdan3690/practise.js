function getSume(num1, num2) {
    console.log(num1 + num2)
}

getSume(15, 15)
getSume(10, 10)



/*
 * Напиши скрипт, який об"єднує всі елементи массива в один рядок.
 * Елементів може бути довільна кількість.
 * Нехай елементи массива  в рядку будут розділені комою.
 */
// let names = ['Bohdan', 'Irina', 'Dima']
// console.log(names.join(', '))
function createStr(names) {
    return names.join(', ')
}

let newStr = createStr(['Danil', 'Lesha'])
createStr(['berry', 'banana', 'strawberry'])
console.log(newStr)
/*

 * Робимо slug в URL з назви стратті (приклад на dev.to)
 * Заголовок статті складається тільки з букв та пропусків
 *
 * - Нормалізуємо рядок
 * - Разбиваємо по словах
 * - Зшиваємо в рядок з розділителями
 * - Ченінг
 */
// https://dev.to/devsatasurion/is-tailwind-css-accessible-52dc
// Повинно вийти top-10-benefits-of-react-framework
function createSlug(str) {
    return str.toLowerCase().split(' ').join('-')
}
let newString = 'Top 10 benefits of React framework'
let resultSlug = createSlug(newString)
console.log(resultSlug)

// Методи split() і join()

// const title = 'Top 10 benefits of React framework';
// let normalizeTitle = title.toLowerCase().split(' ').join('-')
// console.log(normalizeTitle);

// Методи indexOf() і includes()
// +
// Методи push(), pop(), shift(), unshift()

let fruits = ['banana', 'strawberry', 'blackberry', 'pineapple', 'watermelon']
// fruit.shift()

// Метод slice()

// fruits.slice(1,1)
// console.log(fruits.slice(2,4))

// Метод concat()

// let colors = ['red', 'black', 'green']
// let dobleArray = colors.concat(fruits,names)
// console.log(dobleArray)

function createCon(colors, plusFruits) {
    return colors.concat(plusFruits)
}
let newCon = createCon([15, 10, 20], [''])
console.log(newCon)


// Метод splice()

// Sep 18

/*
 * Працюємо з колекцією карток в trello
 * - Метод splice()
 * - Видалити
 * - Додати
 * - Оновити
 */

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ]; 
//   console.table(cards);  

  /*
   * Видалення (по індексу), метод indexOf()
   */
//   const cardToRemove = 'Карточка-3';
//   let index = cards.indexOf(cardToRemove)
//   console.log(index)
//   let splice = cards.splice(index, 1)
//   console.log(splice)
//   console.log(cards)
/*

   * Додавання (по індексу)
   */
// const cardToInsert = 'Карточка-6';
// let indexToInsert = cards.length
// let push = cards.splice(indexToInsert, 0, cardToInsert)
// console.log(cards)

/*
   * Оновлення (по індексу)
   */
//   const cardToUpdate = 'Карточка-4';
//   let index = cards.indexOf(cardToUpdate)
//   console.log(index)
//   let update = cards.splice(index, 2, 'new card', 'second new card')
//   console.log(cards)


/*
 * Напиши скрипт який замінює регістр кожного символа в рядку на протилежний.
 * Наприклад, якщо рядок «JavaScript», то на виході повинно бути «jAVAsCRIPT».
 */

// const strs = 'JavaScript';

// let split = strs.split('')
// console.log(split)
// let reversStr = '';

// for(let i = 0; i < split.length; i++){
//     if(split[i] === split[i].toLowerCase()){
//        reversStr += split[i].toUpperCase()
//     }else{
//         reversStr += split[i].toLowerCase()
//     }
// }


// for (const letter of strs) {
//     if(letter === letter.toLowerCase()){
//        reversStr += letter.toUpperCase()
//     }else{
//         reversStr += letter.toLowerCase()
//     }
// }

// for (const letter of strs) {
//     reversStr += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase()
// }

// console.log(reversStr);