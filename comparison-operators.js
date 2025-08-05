/*
 * Оператори рівності (== и ===) та нерівності (!= и !==)
  ✅ «ЗАВЖДИ ВИКОРИСТОВУЙТЕ СУВОРУ РІВНІСТЬ (===) ТА НЕРІВНІСТЬ (!==)»
 */

console.log(5 === "5");
console.log("hello" == 2);
console.log(undefined === null);

console.log("hello" !== "hi");

!false 
!true 
2 === 4 
2 !== 4 

10 === 100 
'10' === 10

// const promtResult = prompt("Запроси у користувача число з комами");

// const floorNumber = Math.floor(promtResult);

// const ceilNumber = Math.ceil(promtResult);

// const roundNumber = Math.round(promtResult);

// console.log(roundNumber);

// const cm = prompt("виведи значення у cm");

// const meters = cm / 100;

// const result = meters.toFixed(2);

// console.log(result)

const number = "42.75";
const result = Number.parseInt(number)
console.log(typeof result)
console.log(result)
