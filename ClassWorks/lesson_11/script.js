const brothers = [
    {race: "hobbit", height: 110, age: 45, name: "Frodo Baggins"},
    {race: "human", height: 185, age: 46, name: "Aragorn"},
    {race: "elf", height: 189, age: 110, name: "Legolas"},
    {race: "dworf", height: 140, age: 150, name: "Gimli"},
    {race: "human", height: 195, age: 200, name: "Gandalf"},
];

// метод Map - возвращает новый массив, созданный путем
// применения функции к каждому элементу исходного массив
// этот метод не изменяет исходный массив

//пример 1
const names = brothers.map((brother) => {
    return brother.name;
});
console.log(names);

//пример 2
// слова element/brother - это всего лишь имя переменной (может быть любым)
//удобно выбирать слово в единственном числе
// пример массиыв cars -  переменную в колбеке назвать car

const ages = brothers.map((brother) => brother.age);
console.log(ages);

//пример 3
const racesNames = brothers.map((brother) => brother.race + " " + brother.name);
console.log(racesNames);

//пример 4
// высокий - выше или равно 170
// макимальный - ниже 170
// массив из слов [маленький, высокий ......и т.д и т.п]

const size = brothers.map((brother) => {
    if (brother.height >= 170) {
        return "высокий";
    } else if (brother.height < 170) {
        return "маленький";
    }
});
console.log(size);

const sizesVer2 = brothers.map((brother) =>  brother.height >= 170 ? "высокий" : "маленький");
console.log(sizesVer2);

//пример 5
// состарим всех героев массива на 1 год

brothers.forEach((brother) =>brother.name = brother.name.toUpperCase());
console.log(brothers);

//пример 6
// метод reduce - возвращает одно значение

// с помощью цикла
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
console.log(sum);

// с помощью reduce
const sum2 = ages.reduce((accumulator, current) =>  accumulator + current, 0);
console.log(sum2);
// iteration -- acc -- current 
  // 1         -- 0   -- 45
  // 2         -- 45  -- 46
  // 3         -- 91  -- 110
  // 4         -- 201 -- 150
  // 5         -- 351 -- 200

  // Аккумулятор (accumulator) - значение, которое накапливает результат применения функции.
 // Текущий элемент массива (currentValue).
 // Текущий индекс (currentIndex) элемента в массиве.
 // Сам массив (array), к которому применяется метод reduce.
 // Функция callback должна возвращать новое значение аккумулятора после обработки текущего элемента.

 // initialValue (необязательный): Начальное значение аккумулятора. Если это значение указано,
 //  то оно будет использовано в качестве начального значения аккумулятора при первом вызове функции callback.
 // Если initialValue не указан, то первый элемент массива станет начальным значением аккумулятора.

 // комбинация reduce+map
 // общая высота всех героев
 const totalHeight = brothers.reduce((acc, brother) => acc + brother.height, 0);
 console.log(totalHeight);

 // можна сделать цепочку 
 const totalHeight2 = brothers
     .map((brother) => brother.height) //получили массив ростов
     .reduce((acc, height) => acc + height, 0);
 console.log(totalHeight2);

 // хотим обьеденить все имена через пробел
 const nameStr = brothers
     .map((brother) => brother.name)
     .reduce((acc, name) => acc + name + " ", "");
 console.log(nameStr);

 // .trim - удалить пробелы

 // .split - разделить строку на массив
 const str = "Gandalf, Sauron, Saruman, Legolas, Elrond";
 const namesArr = str.split(",");
 console.log(namesArr);

 // .join - соединить массив в строку метод
 const newString = namesArr.join("#");
 console.log(newString);

// метод find - возвращает первый элемент, удовлетворяющий условию
const person =brothers.find((brother) => brother.race === "human");
console.log(person);

const person2 = brothers.find((brother) => brother.height <=120);
console.log(person2);

// метод filter
// возвращает все елементы, удовлетворяющие условию
// не мутирует исходный массив
// выбрать тех кто старше 100 лет
const oldBrothers = brothers.filter((brother) => brother.age > 100);
console.log(oldBrothers);

// выбрать всех старых но не human

const oldHumans = brothers
    .filter((brother) => brother.age > 100 && brother.race !== "human");
console.log(oldHumans);

