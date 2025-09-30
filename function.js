function getSume(num1, num2) {
    // console.log(num1 + num2)
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
// console.log(newStr)
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
// console.log(resultSlug)

// Методи split() і join()

// const title = 'Top 10 benefits of React framework';
// let normalizeTitle = title.toLowerCase().split(' ').join('-')
// console.log(normalizeTitle);

// Методи indexOf() і includes()
// +

// Методи push(), pop(), shift(), unshift()

// let fruits = ['banana', 'strawberry', 'blackberry', 'pineapple', 'watermelon']
// fruit.shift()

// Метод slice()

// fruits.slice(1,1)
// console.log(fruits.slice(2,4))

// Метод concat()

// let colors = ['red', 'black', 'green']
// let dobleArray = colors.concat(fruits,names)
// console.log(dobleArray)

// function createCon(colors, plusFruits) {
//     return colors.concat(plusFruits)
// }
// let newCon = createCon([15, 10, 20], [''])
// console.log(newCon)


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
// function deleteCard(cardToRemove, cards) {
//     return cards
// }
//   let splice = cards.splice(index, 1)

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
  const cardToUpdate = 'Карточка-4';
//   let index = cards.indexOf(cardToUpdate)
//   console.log(index)
//   let update = cards.splice(index, 2, 'new card', 'second new card')
//   console.log(cards)

const updateCard = function(cardToUpdate, cards){ 
  let index = cards.indexOf(cardToUpdate)
  let update = cards.splice(index, 2, '', 'card')

  return cards
}
// console.log(updateCard(cardToUpdate, cards))

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

// const updateCard = function(cardToUpdate, cards){ 
//   let index = cards.indexOf(cardToUpdate)
//   let update = cards.splice(index, 2, '', 'card')

//   return cards
// }
// console.log(updateCard(cardToUpdate, cards)) 



// let chest = ['chest']
// let item = 'boots'
// const addTreasure = function(chest, item) {
//   let items = ['меч', 'щит', 'зілля']
//   let newItems = addTreasure(items)
//   return add
// }
// console.log(addTreasure(chest, item))


// function createSlug(str) {
//     return str.toLowerCase().split(' ').join('-')
// }
// let newString = 'Top 10 benefits of React framework'
// let resultSlug = createSlug(newString)
// console.log(resultSlug)


// Напиши функцію logItems(array), яка отримує масив і використовує 
// цикл for, який для кожного елемента масиву буде виводити в консоль
//  повідомлення в форматі [номер елемента] - [значення елемента].

// Оголоси функцію calculateTotalPrice, яка рахує загальну суму покупки. 
// Вона приймає два параметри, 

// orderedQuantity - перший параметр, кількість одиниць товару в замовленні;
// pricePerItem - другий параметр, ціна одиниці товару.
// Функція повинна повертати загальну суму покупки - 
// результат множення кількості товарів на ціну одного.

// Виклик calculateTotalPrice(5, 100) повертає 500

let calculateTotalPrice = function(orderedQuantity, pricePerItem){
  let total = orderedQuantity * pricePerItem
  return total
}
// console.log(calculateTotalPrice(5, 50))

// 4. 
// Напишіть функцію mul(n, m), яка приймає два аргументи
//  і повертає добуток, суму і різницю цих аргументів. 
//  Перевірте її роботу

function mul(n, m){
  let multi = n * m
  let sum = n + m
  let dev = n / m
  let problems = [multi, sum, dev]
  return problems
}
// console.log(mul(6, 2))

/*створи функцію calculateTax, щоб вона повертала суму податку - результат множення суми на податкову ставку.
що приймає два параметри:
amount - число, сума від якої потрібно обчислити податок. 
Обов'язковий параметр.
taxRate - число, податкова ставка. Необов'язковий параметр. 
За замовчуванням його значення має бути 0.2.*/
let calculateTax = function(amount, taxRate = 0.2){
  let tax = amount * taxRate
  return tax
}
// console.log(calculateTax(200, 0.5))
// console.log(calculateTax(200))

// 2. напиши функцію, яка буде перевіряти чи є продукт на складі
// приймає storage масив з продуктами та
// item продукт, який потрібно знайти.
// Використовуй пошук в масиві за доп методу includes
// якщо є товар повертати повідомлення 
// `${item} is available to order!`
// якщо немає  "Sorry! We are out of stock!";

// checkStorage(["apple", "plum", "pear"], "pLuM")

let storage = ["apple", "plum", "pear", "pLuM"]
let item = 'apple'
let item1 = 'banana'
let findTheItem = function(storage, item){
  let isIncluded = storage.includes(item)
  if (isIncluded){
    return alert(`${item} is available to order!`)
  }
   return alert("Sorry! We are out of stock!")
}
// console.log(findTheItem(storage, item1))

// 1. Напиши функцію myAverageScore , яка у якості аргументу
//  отримує масив з оцінками, і виводить користувачу його 
//  середній результат у наступному форматі:
// Average score: A (якщо середня оцінка від 91 до 100)
// Average score: B (якщо середня оцінка від 81 до 90)
// Average score: C (якщо середня оцінка від 71 до 80)
// Average score: D (якщо середня оцінка від 70 і менше)

// Для перевірки:
// console.log(myAverageScore([100, 75, 81, 96]));
// console.log(myAverageScore([45, 63, 85, 70]));
// console.log(myAverageScore([77, 82, 60, 58]));
// console.log(myAverageScore([93, 99, 93, 96]));


let myAverageScore = function(array){
  let total = 0
  // console.log(array)
  for (let i = 0; i < array.length; i++) {
    total += array[i] 
  }
  // console.log(total)
  let average = total / array.length
  if(average < 100 && average > 91){
    return 'A'
  }  if(average < 90 && average > 81){
    return 'B'
  }
    if(average < 80 && average > 71){
    return 'C'
  }
    if(average < 70){
    return 'D'
  }
// console.log(average)
}
// console.log(myAverageScore([100, 75, 81, 96]));
// console.log(myAverageScore([45, 63, 85, 70]));
// console.log(myAverageScore([77, 82, 60, 58]));
// console.log(myAverageScore([93, 99, 93, 96]));