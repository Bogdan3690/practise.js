/*
 * Знайомство з масивами
 * - Объявлення
 * - Індексація
 * - Довжина
 * - Індекс останнього елемента
 * - Переопреділення
 * - Ітерація
 */

const places = ['home', 'school', 'church', 'park']
const lastIndex = places.length - 1
// console.log(places[lastIndex])
// console.log(places.length - 1)
places[3] = 'garden'
// console.log(places)

// places[0] += '!'
// places[1] += '!'
// places[2] += '!'
// places[3] += '!'
// console.log(places)

// !

for (let i = 0; i < places.length; i += 1) {
    places[i] += '!'
    console.log(places[i])
}

// !