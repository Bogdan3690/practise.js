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

const logins = ['m4ngoDoge', 'aj4xth3m4n', 'k1widab3st', 'poly1scute'];
const loginToFind = 'aj4xth3m4n';
let message;


if (logins.includes(loginToFind)){
        message = `Користувач ${loginToFind} знайдено.`
    }else{
        message = `Користувач ${loginToFind} не знайдено.`
    }


// for (const login of logins) {
//     if (login === loginToFind){
//         message = `Користувач ${loginToFind} знайдено.`
//         break
//     }else{
//         message = `Користувач ${loginToFind} не знайдено.`
//     }
// }
// alert(message)