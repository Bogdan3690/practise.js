// for(let i = 1; i < 5; i += 1){
//     console.log(i)
// }

/*
 * Напиши скрипт який порахує суму всіх парних чисел,
 * які входять в діапазон чисел в змінних від min до max.
 * Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в
 * ньому 2 парних числа - 2 та 4, їх сума 6.
 */

// let min = 1;
// let max = 10;
// let total = 0;
// for(let i = min; i <= max; i += 1){
//     if(i % 2 === 0){
//         total += i
//         console.log(`parne chuslo ${i}`)
//     }
// }

// 4. Написати скрипт який буде перевіряти середній бал успішності учня.
// Прервати роботу циклу, коли середній бал буде меньше 7.

// let total = 0;
// let average = 0;
// for(let i = 0; i < 7; i += 1){
// let grade = Number(prompt("what is your grade?"))
// total += grade;
// average = total / i
// console.log(average);
// if(average < 7){
//     break
// }
// }

/*
 * Напиши скрипт який підраховує загальну суму зп працівників.
 * Кількість робітників зберігається в змінній employees.
 * ЗП кожного працівника це випадкове число від 500 до 5000
 * Записати суму в змінну totalSalary і вивести в консоль
 */

// 1 make consts
let employees = 10
let totalSalary = 0
// 2 make 1 for{} for every employees
for(let i = 1; i <= 10; i += 1){
    // 3 make salary for every employees
    let salary = Math.round(Math.random()*(5000-500)+500)
// 4 add salary to total
    totalSalary += salary
}
console.log(totalSalary)