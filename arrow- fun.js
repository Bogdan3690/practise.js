let hello = () => {
    console.log('Hello js');
}
hello()

let gritting = name => {
    console.log(`Hey, ${name}`);
}
gritting('Bob')

let add = (num1, num2) => {
   console.log(num1 + num2)
}
add(10, 5)

// Виконай рефакторинг функції calculateTotalPrice() таким чином,
//  щоб вона використовувала неявне повернення
const calculateTotalPricee = (quantity, pricePerItem) => {
    return quantity * pricePerItem
};
console.log(calculateTotalPricee(5, 15));
// неявне повернення
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem
console.log(calculateTotalPricee(2, 50));

// Напишіть функцію, яка приймає на вхід масив чисел 
// і повертає новий масив, в якому кожний елемент є 
// квадратом відповідного елементу вхідного масиву.
// Знайдіть суму елементів масиву 
// з використанням колбек-функції 
const arr = [1, 2, 3, 4, 5];

const sumArray = (arr, callback) => {
    let total = 0
    for (const num of arr) {
        total += callback(num)
        console.log(callback(num));
    }
    return total
}

const cb = (num) => {
    return num * 2
}

sumArray([1, 2, 3, 4, 5], cb);


const changeArr = (arr, callback) => {
    let newArr = []
        for (const num of arr) {
        newArr.push(callback(num))
    }
    return newArr
}

console.log(changeArr([1, 2, 3, 4, 5], num => num * 2));
console.log(changeArr([1, 2, 3, 4, 5], num => num * 4));
console.log(changeArr([1, 2, 3, 4, 5], num => num / 2));
let age = 16
console.log(age);

