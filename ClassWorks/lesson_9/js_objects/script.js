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