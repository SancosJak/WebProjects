// 1й вариант работы с промисами
function getName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("John");
        }, 1000);
    });
}
console.log(getName());
// обработка с помощью then
getName().then((name) => {
    console.log(name);
})

// 2й вариант работы с промисами
async function f() {
    const response = await getName();
    console.log(response);
}

// Две одинаковые функции которые возвращают 5

// 1й вариант
function getFive() {
    return new Promise((resolve, reject) => {
        resolve(5);
    })
}
console.log(getFive());

// 2й вариант
async function getFiveVer1() {
    return 5;    
}
console.log(getFiveVer1());