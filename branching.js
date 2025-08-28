// let totalPrice;
// const quantity = 8;
// const price = 50;
// const accaunt = 600;
// totalPrice = quantity * price;

// if(totalPrice > accaunt){
    // alert("Not enough money");
// }else{
    // alert("Nice");
// }

// alert("Have a good day");

// const points = 30;
// if (points <= 10) {
//     console.log("level 1");
// } else if (points <= 20){
//     console.log("level 2");
// } else if (points <= 30){
//     console.log("level 3");
// } else {
//     console.log("High level")
// } 

// 1
// if ("0") {
//  console.log( 'Привіт' );
// }
// true

// 2
// let question = prompt("Яка “офіційна” назва JavaScript?");
// if (question === "ECMAScript"){
//     alert("Правильно!")
// }else{
//     alert("Ви не знаєте? ECMAScript!")
// }

// 3
// let sentence = Number(prompt("Enter number"));
// if (sentence > 0){
//     console.log("1");
// }else if (sentence < 0){
//     console.log("-1");
// }else if(sentence === 0){
//     console.log("0");
// }
// console.log(typeof sentence);

// 4
// let a = 1;
// let b = 3;
// let result = a + b < 4 ? 'Нижче' : "Вище";
// console.log(result)

// let segment = Number(prompt("Enter number"));
// if (segment > ){
//     console.log("1");
// }
// if (sentence < 0){
//     console.log("-1");
// }if(sentence === 0){
//     console.log("0");
// }if(sentence === 0){
//     console.log("0");
// }

// let isOnline = true;
// let isFriend = true;
// let isDnd = false;
// if (isOnline === true && isFriend === true && isDnd === false){
//     prompt("Enter message")}
// else{
//     alert("No online!")}

// let free = "free";
// let pro = "pro";
// let vip = "vip";
// let ask = prompt("what subscribe?")
// if (ask === pro || ask ===  vip){
//     alert("Content")}
// else if (ask === free){
//     alert("Get a fee subscribe!")}

// let balance = Number(prompt("How many money do u got"));
// let payment = Number(prompt("Sum"));
// if (balance >= payment){
//     alert(`Загальна вартість замовлення ${payment} кредитів. Перевіряємо кількість доступних коштів на рахунку`)
//     alert(`На рахунку залишилося ${balance - payment} кредитів`)
// }else if(balance < payment)
//     alert(`На рахунку недостатньо коштів для проведення операції!`)
// alert("Операція завершена");

// let browser = 'Opera'
// switch (browser) {
//  case 'Edge':
//   console.log("You've got the Edge!")
//   break
//  case 'Chrome':
//  case 'Firefox':
//  case 'Safari':
//  case 'Opera':
//   console.log('Ми підтримуємо і ці браузери')
//   break
//  default:
//   console.log('Маємо надію, що ця сторінка виглядає добре!')
//   break
// }


//  * Напиши скрипт вибору готеля по кількості зірок.
//  * 1,2 - 20$,  3,4 - 50$,  5 - 120$
//  *
//  * Якщо в змінній stars щось окрім чисел 1-5, виведи рядок
//  * 'Токої кількості зірок немає'

// let stars = Number(prompt("Enter how many stars"))
// if (stars === 1 || stars === 2){
//     alert("20$")
// }else if (stars === 3 || stars === 4){
//     alert("50$")
// }else if (stars === 5){
//     alert("150$")
// }else{
//     alert('Токої кількості зірок немає')
// }

// let stars = Number(prompt("Enter how many stars"))
// switch (stars){
//     case 1:
//     case 2:
//     alert("20$")
//     break
//     case 3:
//     case 4:
//     alert("50$")
//     break
//     case 5:
//     alert("150$")
//     break
//     default:
//         alert('Токої кількості зірок немає')
// }

//  * Напиши скрипт вибору опції доставки товару.
//  * Опція зберігається в змінній option: 1 - самовивоз, 2 - кур"єр, 3 - пошта
//  *
//  * В змінну message записати повідомлення в залежності від опції.
//  * - 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
//  * - 'Кур"єр доставить замовлення завтра з 9:00 до 18:00'
//  * - 'Посилка буде відправлена сьогодні'
//  * - 'Вам передзвонит менеджер'
//  */

// let option = prompt('опції доставки товару.').toLowerCase().trim()
// switch(option){
//     case 'самовивоз':
//         alert('Ви зможете забрати товар завтра з 12:00 в нашому офісі')
//         break
//     case 'кур"єр':
//         alert('Кур"єр доставить замовлення завтра з 9:00 до 18:00')
//         break
//     case 'пошта':
//         alert('Посилка буде відправлена сьогодні')
//         break
//         default:
//             alert('Вам передзвонит менеджер')
// }

// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число,яке дорівнює сумі букв імені і прізвища. Якщо умова не виконується - вивести “УПС”. Наприклад: “Віктор Сташко” Віктор — 6 літер, Сташко — 6 літер. Виводимо 12. Використовувати вбудований метод length.
// let name = prompt("Name?").trim()
// let secondName = prompt("Second Name?").trim()
// if(name.length > 4 && secondName.length > 5){
//     alert(name.length + secondName.length);
// }else{
//     alert('Oops')
// }

const a = 5;
const b = 15;
console.log(a);//5

if(true){
    const b = 10;
    console.log(b);//10
    console.log(a);//5
}

console.log(b);//15