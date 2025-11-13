// Створіть клас Rectangle, що містить властивості
// width та height.
// Додайте метод getArea(), який повертає площу прямокутника.

class Rectangle{
    constructor(w,h){
        this.w = w
        this.h = h
    }
    getArea(){
        return this.w * this.h
    }
}
const rectangle1 = new Rectangle(10, 5);
console.log(rectangle1.getArea()); // 50

// Створіть клас Calculator, який буде мати наступні методи:
// add(), subtract(), multiply(), divide().
// Кожен метод приймає два аргументи - числа, які необхідно обробити
// Результатом кожного методу має бути результат
// відповідної математичної операції.

class Calculator{
    add(a,b){
       return a + b
    }
 subtract(a,b){
    return a - b
 }
  multiply(a,b){
    return a * b
  }
   divide(a,b){
    return a / b
   }
}
const calculator = new Calculator();
console.log(calculator.add(2, 3)); // 5
console.log(calculator.subtract(5, 2)); // 3
console.log(calculator.multiply(2, 4)); // 8
console.log(calculator.divide(10, 2)); // 5

// Нехай є базовий клас Animal з методом makeSound().
//  Створіть підклас Cat, який буде наслідувати Animal
//  та перевизначати метод makeSound().

class Animal{
    constructor(name){
        this.name = name
    }
    makeSound(){
        console.log("The animal makes a sound");
    }
}
const animal = new Animal('Busika');
animal.makeSound(); // "The animal makes a sound"

class Cat extends Animal{
    constructor(name){
        super(name)
    }
    makeSound(){
        console.log("Meow");
    }
}
const cat = new Cat('Rushuk');
cat.makeSound(); // "Meow"
console.log(cat.name);
console.log(cat);


