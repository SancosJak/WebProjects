// Задание 1
// Создайте массив из следующих элементов: "Семен", "Иван", "Петр", "Татьяна". 
// Создайте еще один массив с возрастами: 18, 27, 74, 34;
// Создайте и заполните при помощи цикла этот новый массив новыми элементами по образу: "Семен 18 лет/годов"
let names = ["Семен", "Иван", "Петр", "Татьяна"];
let ages = [18, 27, 74, 34];
let namesAndAges = [];

for (let i = 0; i < names.length; i++) {
    namesAndAges.push(names[i] + " " + ages[i] + " лет/годов");
}

console.log(namesAndAges);