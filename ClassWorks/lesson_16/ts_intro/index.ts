console.log("Welcome to TypeScript");

let x = 10;
// x = "Hello";
console.log(x);

// как типизировать переменную
//явно или неявно
// при объявлении переменной мы указываем тип данных

let y: number = 10; // пример явной типиизации
let p: string; // пример неявной типизации
p = "Hello";

let isDrunk: boolean = true;

// ключевое слово type
// мы можем объявлять типы отдельно

type Age = number;
let myAge: Age = 10;

let k: number | string = 10;
// k = "hello";
k = 100;
console.log(k);

let qwerty: any;

//union type
type Pet = "cat" | "dog";
let petOfSasha: Pet = "dog";
petOfSasha = "cat";
console.log(petOfSasha);

// можно розширять типы
type ExtendedPet = Pet | "fish";
let q: ExtendedPet = "fish";
console.log(q);

type Gender = "male" | "female";
type ExtendedGender = Gender | "not binary person"; 

// как типизировать массив строк
let fruits: string[] = ["apple","orange","banana"];

let vegetables:  string[] = [];
vegetables.push("carrot");
console.log(vegetables);

// Как типизировать объкты?

type User ={
    firstName: string;
    isAdmin: boolean;
}

const user1: User = {
    firstName: "Sasha",
    isAdmin: true
}

// Как типизировать интерфейсы
interface Monster {
    name: string;
    height: number;
    isAlive: boolean;
    isEvil: boolean;
}

const frankenstein: Monster = {
    name: "Frankenstein",
    height: 1.5,
    isAlive: true,
    isEvil: false
}
console.log(frankenstein);

// розширение интерфейсов
interface ExtendedMonster extends Monster {
    isFlying: boolean;
}

// опциональные поля
interface Food {
    title: string;
    isSweet?: boolean;
}
// ? - опциональное поле не обязательное

const pancake: Food = {
    title: "Pancakes",
    isSweet: true
}

const carrot: Food = {
    title: "Carrot",
}

console.log(pancake);
console.log(carrot);

// создать интерфейс город City
//со след свойствами
// name, population, но riversName - необязательные
// является ли город столицей - необязательное IsCapital
//isTouristic - необязательное

// создать обьект для этого интерфейса

// дополнительно сделайте интерфейс расширяющий City
// со след свойствами foundationDate

interface City {
    name: string;
    population: number;
    riversName?: string[];
    isCapital?: boolean;
    isTouristic?: boolean;
  }
  
  const myCity: City = {
    name: "New York",
    population: 1000000,
    riversName: ["River1", "River2"],
    isCapital: true,
    isTouristic: true,
  };

  interface ExtendedCity extends City {
    foundationDate: Date;
  }
  
  const berlin: ExtendedCity = {
    name: "Berlin",
    population: 3769495,
    riversName: ["River3", "River4"],
    isCapital: true,
    isTouristic: true,
    foundationDate: new Date("1237-10-28"),
  };
  console.log(myCity);
  console.log(berlin);
  
  // типизация функций
  //нужно типизировать параметры и возвращаемое значение
  function sum(a: number, b: number): number {
    return a + b;
  }
const dev = (a: number, b: number): number => a / b;

console.log(sum(10, 12));
console.log(dev(20, 2));

function toUpper(str: ExtendedPet): string {
    return str.toUpperCase();
}
console.log(toUpper("dog"));

const nine = Number("9");
const nineStr = String(9);
console.log(nine);
console.log(nineStr);