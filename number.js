let total = 0;
const min = 10;
const max = 100;
total = max / min;
console.log(total);

const num1 = 7;
const num2 = 3;
console.log(num1 % num2);


console.log(20 >= 20);


const maxWidth = "54.5px";
const borderRadius = "21.342424px";
// console.log(Number(maxWidth));
const parsedWidth = Number.parseFloat(borderRadius);
console.log(parsedWidth);

const k1 = "5px";
const k2 = "12djd334";
const k3 = "12.45asdwe12";
const k4 = "wqweeewq";
const parsedK1 = Number.parseInt(k1);
console.log(parsedK1);
const parsedK2 = Number.parseInt(k2);
console.log(parsedK2);
const parsedK3 = Number.parseInt(k3);
console.log(parsedK3);
const parsedK4 = Number.parseInt(k4);
console.log(parsedK4);

const salery = 2000.4567;
console.log(Number(salery.toFixed(1)));

const roundNumber = Math.round(10.4);
console.log(roundNumber);

const powNumber = Math.pow(10, 2);
console.log(powNumber);

const randomNumber = Math.round(Math.random() * (max - min) + min);
console.log(randomNumber);

const height = "23cm";
const width = "10cm";
const area = Number.parseFloat(height) * Number.parseFloat(width);
console.log(area);
