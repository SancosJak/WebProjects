// Стрелочная функция
// Пример обычной функции

function sum(a,b){
    return a+b;
}
console.log(sum(20,10));// 30

// Стрелочная функция
// блочная
const sum2 = (a,b) =>{
    return a + b;
}

// Запись в одну строку
// строчная

const sum3 = (a,b) => a + b;
const res = sum3(10,20);


//Передача функции в качестве параметра
function calculate(a,b, operation){
    return operation(a,b);
}

function subtrack(a,b){
    return a - b;
}

calculate(10,20, subtrack);
calculate(9,3, (a,b) => a / b);

// Создать метод universalGreeting - этот метод будет приветсвовать на разных языках
//пусть метод принимает в качестве параметров
// - имя
// - функция приветствия

// - одна пксть приветсвует на англ englishGreeting "Hello, ${name}!"
// - другая пусть приветсвует на китай chineseGreeting "你好，${name}！"
function englishGreeting(name) {
    return `Hello, ${name}!`;
  }
  
  function chineseGreeting(name) {
    return `Konichiva，${name}！`;
  }
  
  function universalGreeting(name, greetingFunction) {
    return greetingFunction(name);
  }
 
  const englishGreet = universalGreeting('Bond', englishGreeting);
  const chineseGreet = universalGreeting('Jackie Chan', chineseGreeting);
  
  console.log(englishGreet); 
  console.log(chineseGreet);  
