// Массив - динамический массив
// длина не фиксированная

// 2 способа создания массива

// 1. Создание массива с помощью литерала
const array1 = [1, 2, 3, 4, 5];
const arr1 =[];

// 2. Создание массива с помощью конструктора Array
const array2 = new Array(1, 2, 3, 4, 5);
const arr2 = new Array();

// как добавить значение по индексу
const fruits = [];
fruits[0] = 'apple'; 
console.log(fruits);
fruits[1] = 'banana';
console.log(fruits);

// как получить значение по индексу
console.log(fruits[1]);
// как получить значение по индексу элемента которого нет в массиве
console.log(fruits[5]);

// как получить длину массива
console.log(fruits.length);

// как создать массив сразу со значением
const cars = ["Saab", "Volvo", "BMW", "Mercedes", "Audi"];
console.log(cars);

// пройтись по массиву циклом
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// методы работы с массивами
const student = [];
student.push("John"); // добавить значение в конец массива
console.log(student);

student.push("Tom"); 
console.log(student);

student.unshift("Bob"); // добавить значение в начало массива
console.log(student);

const vik = student.pop(); // удалить значение с конца массива
console.log(vik);
console.log(student);

const vik1 = student.shift(); // удалить значение с начала массива
console.log(student);
console.log(vik1); //елемент удалился из массива но сохранился в переменную

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
console.log(matrix);

console.log("--------------");

matrix.forEach((row) => {
    console.log(row);
})
