// Пример 1 - создание объекта
const student = {
    age: 22,
    name: 'Вася',
    // age:23
};

console.log(student.age);// 22
console.log(student.name);// Вася

// Пример 2 - ключ может состоять из двух слов
// Если ключ имеет пробелы - его нужно обернуть в кавычки

const product ={
    title: "iPhone",
    price: 2000,
    "model of phone" : "XR"
};
// Получить значение по ключу
console.log(product.price);
console.log(product["model of phone"]);

// Положить значение по ключу
product.diagonal = 6.5;
product["type of adapter"] = "USB-C";
console.log(product);

// Пример 3 
// Если у нас есть переменная и мы хотим доставать
// значения из объекта по этой переменной

let key = "age";
console.log(student[key]);
key ="name";
console.log(student[key]);

const client ={
    firstName: "John",
    wife:"Maria"
};
const key1 ="wife";
//Как достать по переменной из объекта
console.log(client.key1);//undefined
console.log(client[key1]); //Maria

// Пример 4
// Допустим у нас были переменные и мы хотим создать из них объект

const title = "Titanic";
const capacity = 1500;

const ship = {title,capacity};
console.log(ship);

// Пример 5
const name1 = "Avrora";
const cap = 300;
// хочу создать объект из этих переменных но с другими названиями ключей
const avrora = {title:name1,capacity:cap};
console.log(avrora);

// Пример 6
// метод внутри объекта
const dog = {
    nick : "Rex",
    bark(){
        console.log("Woof!");
    }
};
dog.bark();

// Пример 7
// прототипное наследование
//наследование - это копирование свойств и методов родительского объекта в новый объект
const bicycle = {
    brand: "Cannondale",
    price: 3000,
    bell(){
        console.log("Beep!");
    }
};
bicycle.bell();
// на основе велосипеда мы сделаем горный велосипед
// указываем прототип с помощью ключевого слова prototype

const mountainBike = {
    __proto__: bicycle,
    price: 5000,
    gears: 7,
}
console.log(mountainBike.price);
console.log(mountainBike.gears);
console.log(mountainBike.brand);