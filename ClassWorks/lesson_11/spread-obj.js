// повторим spread массива
const fruits = ["apple", "banana", "mango"];
const newFruits = [...fruits, "orange"];
console.log(newFruits);

// повторим spread объекта
const fruit = {
    title: "apple",
    color: "red",
    weight: 200,
}
console.log(fruit);

const specialOrange = {...fruit, title: "orange", color: "orange", country : "USA"};
console.log(specialOrange);

//скопируем apple и заменим цвет
const specialApple = {...fruit, color: "green"};
console.log(specialApple);