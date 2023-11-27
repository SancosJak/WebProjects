// Spread syntax - синтаксис " распыление"

// Повторим примитивные и ссылочные типы 
const fruits = ["apple", "orange", "mango"];
const fruits2 = fruits;
fruits[0] = "banana";
console.log(fruits);
console.log(fruits2);

// То есть один объект и две переменные которые содержат ссылку на этот объект
// Если сам объект изменить/мутировать - то обе переменные будут
// содержать ссылку на измененный объект

// при работе с примитивными типами - мы храним в переменной значение
let str1 = "hello";
let str2 = str1;
str1 = "bye";
console.log(str1);
console.log(str2);

// как скопировать элементы массива в новый массив
const cars = ["BMW", "Mercedes", "Audi"];
// spread operator - [...]
const carsCopy = [...cars];

carsCopy[0] = "Opel";
console.log(cars);
console.log(carsCopy);

// как объединить два массива в 3й с помощью spread
const cities1 = ["London", "Paris"];
const cities2 = ["Berlin", "Moscow"];

const citiesAll = [...cities1, ...cities2];
console.log(citiesAll);

const vegetables = ["carrot", "onion"];
const newVegetables = [...vegetables, "cucumber"];
console.log(newVegetables);