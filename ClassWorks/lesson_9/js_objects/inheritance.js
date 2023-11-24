// Class
class Animal {
    constructor(age, name, color) {
        this.age = age
        this.name = name
        this.color = color
    }

    info() {
        console.log(`Меня зовут ${this.name}, Возраст ${this.age} лет, цвет - ${this.color}`)
    }
}

const panda = new Animal(14, 'Po', 'black');
panda.info();

// наследование
class Bird extends Animal {
    constructor(age, name, color, heightOfFlight, ration) {
        super(age, name, color);
        this.heightOfFlight = heightOfFlight,
        this.ration = ration;
    }
    info() {
        console.log(`Меня зовут ${this.name}, Возраст ${this.age} лет, цвет - ${this.color}, высота полёта ${this.heightOfFlight}, рацион ${this.ration}`);
    }
}
const colibri = new Bird(3, 'Colibri', 'white', 5, 'flowers');
console.log(colibri);
colibri.info();

class Alcohol{
    constructor(title, volume, strength) {
        this.title = title;
        this.volume = volume;
        this.strength = strength;
    }
    drink() {
        console.log(`Приятно выпить ${this.title}`)
    }
}

class Cognac extends Alcohol {
    constructor(title, volume, strength, age, country) {
        super(title, volume, strength);
        this.age = age;
        this.country = country;            
    }
}

class Martini extends Alcohol {
    constructor(title, volume, strength, sugarAmount) {
        super(title, volume, strength); 
        this.sugarAmount = sugarAmount;        
    }
}

const ararat = new Cognac('Ararat', 0.5, 40, 10, 'Armenia');
ararat.drink();

const blackLabel = new Martini('Bianco', 0.5, 40, 10);
blackLabel.drink();