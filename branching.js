let totalPrice;
const quantity = 8;
const price = 50;
const accaunt = 600;
totalPrice = quantity * price;

if(totalPrice > accaunt){
    // alert("Not enough money");
}else{
    // alert("Nice");
}

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

// let stringOne = prompt("Enter content").trim();
// let stringTwo = prompt("Enter content").trim();
// if (stringOne != "" && stringTwo != ""){
//     alert("Обидва поля заповнені")
// }else{
//     alert("Не всі поля заповнені")
// }

// let number1 = Number(prompt("enter number"));
// let number2 = Number(prompt("enter second number"));
// let sum = number1 + number2
// if (sum > 10){
//     alert("Сума більша за 10");
// }else{
//     alert("Сума менша або дорівнює 10")};

// let text = prompt("Enter").toLowerCase()
// if(text.includes("javascript")){
//     alert("Текст містить слово JavaScript");
// }else{
//     alert("Текст не містить слово JavaScript")
// }

let numbers = Number(promt("Enter Numbers"))
if (numbers >= 10 && numbers <= 20){
    alert("Число входить в діапазон від 10 до 20")
}else{
    alert("Число не входить в діапазон від 10 до 20")
}