// destructing
const person ={name: "Frank", age: 21};
console.log(person.age);

const age = person.age;
const name = person.name;
console.log(name, age);

//2-й способ
const dog = {nick: "Rex", breed: "Corgi"};
const {nick, breed, height = 10, color} = dog;
console.log (nick);
console.log (breed);
console.log (height);
console.log (color);
