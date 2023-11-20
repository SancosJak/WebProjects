const paragraphElement = document.getElementById("text");
const changeButtonElement = document.getElementById("btn-change");
const flowersElement = document.getElementById("flowers");
const btnFlower = document.getElementById("btn-flower");
const imgElement = document.getElementById("img");
const btnImg = document.getElementById("btn-img");

// console.log(paragraphElement);
// console.log(changeButtonElement);
changeButtonElement.addEventListener("click", () => {
    paragraphElement.style.backgroundColor = "yellow";
})

btnFlower.addEventListener("click", () => {
    flowersElement.textContent = "Розы";
})

btnImg.addEventListener("click", () => {
    imgElement.src = "https://wallup.net/wp-content/uploads/2016/01/193719-lion-animals-nature.jpg";
    imgElement.style.width = "500px";
})

//new element
var newElement = document.createElement('div');
newElement.setAttribute('class', 'new-class');
newElement.textContent = 'Новый элемент';
newElement.className = 'new-class';
newElement.innerHTML = '<p>Новый элемент</p>';
var targetElement = document.body;
targetElement.appendChild(newElement);

//button for new element
var newButton = document.createElement('button');
newButton.textContent = 'Нажми';
newButton.setAttribute('id', 'myButton');
newButton.addEventListener('click', function() {
  alert('Кнопка была нажата!');
});
var targetElement = document.body;
targetElement.appendChild(newButton);