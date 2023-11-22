// вывод в консоль
console.log("chek 1 2")

// Создание переменных
// const, let и var
let dog = "Sharik";
dog = "Tuzik";
dog = 12; //изменили тип данных
console.log(dog); 

const cat = "Barsik";


// Примитивные типы данных
//1. string - является примитивом

let str1 = "Можно в двойных"
let str2 = 'Можно в одинарных'

let str3 = "13" //  это стринг
let str4 = str1 + " "+ str2;
console.log(str4);
console.log(str1.toUpperCase()) // перевод в верхний регистр

// 2.Number
let num1 = 9;
let num2 = 9.6;

// 3. bigInt
let num3 = 1239n; //больший диапозон,чем у number

// 4. Boolean
let isDrunk = true;
// условная конструкция
if (isDrunk){
    console.log("Ты пьян");
}
const result = isDrunk ? "Ты пьян" : "Ты не пьян";

//.5 undefined

let str5;
str5 = 12;
console.log(str5);

// 6. null
// null - отсутствие значения
// document.getElementById("несуществующий id")---> null
// Можно присвоить null вручную

let empty = null;
console.log(empty);

// .7 symbol
// Новый тип,раньше его не было и сейчас остается малопопулярным
// Используется для создания уникальных значений внутри программы
let s1 = Symbol("something")
console.log(s1);

// ПРЕОБРАЗОВАНИЕ ТИПОВ
// 1. Преобразование в строку
// неявное преобразование
let str7 = ""+ 9;// "9"
    
// явное преобразование
const num4 =10;
let str8 = String(num4); // "10"
console.log(str8);
// Пример
const res = 9 + 12 + "5"; //215
console.log(res); 

const res2 = "5" + 9 + 12; //5912
console.log(res2);

//2. Преобразование в число неявное
const num5 = +"6";
console.log(num5);

const sum = +"9" + +"10"; // 19
console.log(sum);

// явное преобразование
const num6 = Number("117");
console.log(num6);

const num7 = Number("129&8*#"); // NaN - not a number
console.log(num7);

console.log(NaN + 10); // NaN

// Можно посмотреть тип значения переменной
// typeof - оператор определения типа данных

console.log(typeof num6);
console.log(typeof num7);

// 3. Преобразование в булевое значение
// число в булевое значение
console.log(Boolean(-10)); // true - отрицательное число
console.log(Boolean(0)); // false - ноль
console.log(Boolean(7)); // true - положительное число

// преобразование строки в булевое значение
const res6 = Boolean(""); // false
const res7 = Boolean(" "); // true

console.log(res6);
console.log(res7);

const res8 = Boolean(null); // false
console.log(res8);

const res9 = Boolean(undefined); // false
console.log(res9); 

// равенство строгое и нестрогое
// === - строгое равенство
// == - нестрогое равенство

console.log(1 == "1"); // true
console.log(1 === "1"); // false

console.log(true == ""); // false
console.log(true == "1"); // true