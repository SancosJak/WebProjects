// Функции в JS
// Function declaration - объявление функции
function sum(a,b){
    return a+b;
}
// вызов функции
let result = sum(50,30);
console.log(result);

// если нет у функции return - то возвращает undefined
function print(){
    console.log("Hello");
}
let res2 = print();
console.log(res2);

// function expression - выражение функции
const divide = function(a,b){
    return a/b;
}
console.log(divide(10,2));

// какая разница между function declaration и function expression
print2();
function print2(){
    console.log("PRINT2");
}