// Задание 1
// Создайте классы: Plant, Rose.
// Роза должна наследовать Растение. Пусть у растения будут поля:

// рост,
// возраст.
// И метод grow, который увеличивает его рост на 10 см.

// У розы должно быть поле - количество бутонов (numberOfFlowers). Создайте объект класса розы, вызовите метод.

class Plant {
    constructor(height, age) {
        this.height = height;
        this.age = age;
    }

    grow() {
        this.height += 10;
        console.log("Новая высота растение: " + this.height + " см");
    }
}

class Rose extends Plant {
    constructor(height, age, numberOfFlowers) {
        super(height, age);
        this.numberOfFlowers = numberOfFlowers;
    }
}

let rose = new Rose(40, 2, 7);
rose.grow();

console.log("Высота розы: " + rose.height + " см");
console.log("Возраст розы: " + rose.age + " года");
console.log("Количество бутонов у розы: " + rose.numberOfFlowers);
