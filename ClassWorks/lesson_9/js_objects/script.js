// Пример 1 создание объекта
const student = {
    name: "Вася",
    age: 72
};
console.log(student);
console.log(student.name);
console.log(student.age);

// Пример 2 создание объекта
const product = {
    title: "iPhone",
    price: 2000,
    "model of phone": "X"
};
console.log(product);
console.log(product.title);
console.log(product.price);
console.log(product["model of phone"]);

// Положить значения по ключу
product.diagonal = 6.5;
product["type of adapter"] = "USB-C";
console.log(product);
