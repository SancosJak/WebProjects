// Задание 1
// Создайте на основе страрого массива новый массив объектов по образу: 
//[{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]
const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];

const cars1 = cars.map(car => ({ brand: car.brand, isDiesel: car.isDiesel }));
console.log(cars1);

// Задание 2
// Создайте новый массив, где оставьте только машины с дизельным двигателем.
const cars2 = cars.filter(car => car.isDiesel);
console.log(cars2);

// Задание 3
// Создайте новый массив, где оставьте только машины не с дизельным двигателем.
const cars3 = cars.filter(car => !car.isDiesel);
console.log(cars3);

// Задание 4
// Посчитайте общую стоимость всех машин не с дизельным двигателем.
const totalCost = cars3.reduce((acc, car) => acc + car.price, 0);
console.log(totalCost);
//......................................................
const totalNonDieselCarsPrice = cars
    .filter(car => !car.isDiesel)
    .reduce((total, car) => total + car.price, 0);

console.log(totalNonDieselCarsPrice);

// Задание 5
// Повысьте цену всех машин в массиве на 20%.
const increasedPrices  = cars.map(car => ({ ...car, price: car.price * 1.2 }));
console.log(increasedPrices );

// Задание 6
// Создайте новый массив, где все дизельные машины заменены на { brand: "Tesla", price: 25000, isDiesel: false }
const dieselToTesla = cars.map(car => car.isDiesel ? { brand: "Tesla", price: 25000, isDiesel: false } : car);
console.log(dieselToTesla);
