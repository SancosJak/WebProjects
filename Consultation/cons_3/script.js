// 1. Напишите цикл,который считает сумму чисел от 20 до 35
let sum = 0;
for (let i =20; i <=35; i++){
    sum+= i;
    console.log(sum);
}

// 2. Напишите цикл,который выводит произведение всех чисел от 10 до 15
let mult = 1;
for(let i = 10; i <=15; i++){
    mult*=i;
    console.log(mult);
}

// 3.Дан массив чисел. Нужно сформировать новый массив,в который войдут
// только положительные числа

const numbers =[1,5,-7,-88,9,44,15,35,-5,10];
const positive_numbers = [];
for(let i =0; i<numbers.length; i++){
    if(numbers[i]>0){
        positive_numbers.push(numbers[i]);
    }
    console.log(positive_numbers);
}
// numbers -массив с числами
//i - индекс элемента массива
// numbers[i] - элемент массива по индексу i

//.4 Сформировать новый массив,в котором будут только четные числа

const even_numbers = [];
for(let i = 0; i<numbers.length; i++){
    if(numbers[i]%2 === 0){
        even_numbers.push(numbers[i]);
    }
    console.log(even_numbers);
}

// .5 Сформировать новый массив,в котором будут только четные отрицательные числа
const even_negative_numbers = [];
for(let i = 0; i<numbers.length; i++){
    if(numbers[i]%2 ===0 && numbers[i]<0){
        even_negative_numbers.push(numbers[i]);
    }
    console.log(even_negative_numbers);
}
// .6 Сформировать новый массив,в котором будут числа
// заканчивающиеся на 5 =>[5,10,15,35,-5]
const numbers_five = [];
for(let i =0;i <numbers.length; i++){
    if(numbers[i]%10===5 || numbers[i]%10=== -5){
        numbers_five.push(numbers[i]);
    }
    console.log(numbers_five);

    }
    // || - или
    // && - и

    // let a = 10;
    // a = 100;
    // console.log(a);

    // const b =12;
    // // b =120;
    // // console.log(b);

    // let number =15;
    // if (number >= 10){
        // console.log('hello);
    // else{console.log('bye');
        
    //}}

    // вывести в консоль каждое третье число от 96 до 15
    // for(let i =96; i>=15; i-=3){
    //     console.log(i);
    // }

    // function multNum(num){
    //     return num*10;
        
    // }
    // console.log(multNum(5));

      // Написать функцию,которая принимает в качестве аргумента 2 числа
      // а возвращает их сумму  

      function getSum(num1, num2){
        return num1+num2;
      }
      const getSum_arrow =(num1,num2) => num1+num2; // стрелочная функция
      console.log(getSum_arrow(5,10));// вызов стрелочной функции 15
      console.log(getSum(43,7));

      // Тернарный Оператор
      // Условие ? значение 1(true) : значение 2 (false)
      // number>=10 ? console.log('hello') : console.log('bye');

//       let name_1 = 'John';
//       alert(name_1);

// let years = prompt('Сколько вам лет?', 18);
// alert('вам ' + years + ' лет');
    




