console.log("Welcome to DOM!");

// Как создать переменную
// String name = "John";
// let - объявление переменной
//  const - объявление константы

let name = "John";
const name1 = "Manrina";
let age;
age = 25;
console.log(age);

// Мы можем сохранять в переменную элементы из html-документа
// и дальше работать с ними
// метод get.getElementById() - получить элемент по id

const boxElement = document.getElementById("box-1");
console.log(boxElement);

// Все что касается стиля находится под атрибутом style
// свойства css внутри js пишутся в формате LowerCamelCase 
// Пример использования свойства style для изменения стиля элемента
// для backgroundColor
boxElement.style.backgroundColor = "red";
boxElement.style.width = "200px";
boxElement.style.height = "100px";
boxElement.style.marginTop = "20px";
boxElement.textContent = "Hello";