/*
 * - 3найомство з масивами
 * - Объявлення
 * - Індексація
 * - Довжина
 * - Індекс останнього елемента
 * - Переопреділення
 * - Ітерація
 */

// const places = ['home', 'school', 'church', 'park']
// const lastIndex = places.length - 1
// console.log(places[lastIndex])
// console.log(places.length - 1)
// places[3] = 'garden'
// console.log(places)

// places[0] += '!'
// places[1] += '!'
// places[2] += '!'
// places[3] += '!'
// console.log(places)

// !
// for (let i = 0; i < places.length; i += 1) {
//     places[i] += '!'
//     console.log(places[i])
// }
// !

/*
 * Порахувати загальну суму покупок в корзині
 */

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1){
//     cart[i] = Math.round(cart[i] * 1.1)
//     console.log(cart[i])
// }

// for (const product of cart) {
//     total += product
// }
// console.log(total)

// Додати такс

/*
 * Напиши скрипт пошуку логіна
 * - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
 * - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
 *
 * - Потім через for...of
 * - Логіка break
 * - Метод includes() с тернарним оператором
 */

// const logins = ['m4ngoDoge', 'aj4xth3m4n', 'k1widab3st', 'poly1scute'];
// const loginToFind = 'aj4xth3m4n';
// let message;


// if (logins.includes(loginToFind)){
//         message = `Користувач ${loginToFind} знайдено.`
//     }else{
//         message = `Користувач ${loginToFind} не знайдено.`
//     }


// for (const login of logins) {
//     if (login === loginToFind){
//         message = `Користувач ${loginToFind} знайдено.`
//         break
//     }else{
//         message = `Користувач ${loginToFind} не знайдено.`
//     }
// }
// alert(message)

// arrays methods 16 Sep

/*
 * Напиши скрипт, який об"єднує всі елементи массива в один рядок.
 * Елементів може бути довільна кількість.
 * Нехай елементи массива  в рядку будут розділені комою.
 */
// let names = ['Bohdan', 'Irina', 'Dima']
// console.log(names.join(', '))
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

// Метод splice()