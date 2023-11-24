//Создайте объект транспортного средства vehicle с полями
// speed, capacity, method drive

// создайте на основе vehicle объект jeep 
let vehicle = {
    speed: 40,
    capacity: 4,
    drive: function() {
        console.log("Поехали.");
    }
};

let jeep = Object.create(vehicle);
jeep.speed = 60; 
jeep.capacity = 5;
jeep.numberOfDorrs = 2; 

jeep.drive = function() {
    console.log("Jeep внедорожник.");
};

console.log("Jeep Speed:", jeep.speed);
console.log("Jeep Capacity:", jeep.capacity);
jeep.drive();

// class Vehicle {
//     constructor() {
//         this.speed = 40;
//         this.capacity = 4;
//     }

//     drive() {
//         console.log("поехали");
//     }
// }

// const vehicle = new Vehicle();
// vehicle.drive();

// class Jeep extends Vehicle {
//     constructor() {
//         super(); 
//         this.capacity = 5;
//         this.numberOfDoors = 2;
//         this.speed = 60;
//     }
// }

// const jeep = new Jeep();
// jeep.drive();

//-------------------------------other var
// const vechicle = {
//     speed: 40,
//     capacity: 4,
//     drive(){
//         console.log("поехали");
//     }
// }
// vechicle.drive();
// const jeep = {
//     __proto__:vechicle,
//     capacity: 5,
//     numberOfDoors: 2,
//     speed:60,
// }

// jeep.drive();