//7 типов примитивных
// undefined, null, boolean, number, string, symbol

// преобразование в строку
const str = String(1999);
console.log(str);

// преобразование в число
const num = Number("123141");
const num2 = Number("123/14123la");
console.log(num);
console.log(num2);
// NAN - not a number - type: number
console.log(typeof NaN);

// преобразование в булевое значение
const b1 = Boolean(0); // false
const b2 = Boolean(1); // true
const b3 = Boolean(""); // false
const b4 = Boolean(-1); // true
const b5 = Boolean(null); // false
const b6 = Boolean(undefined); // false
const b7 = Boolean(NaN); // false

