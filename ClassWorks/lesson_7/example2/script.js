const newElement = document.createElement('p');
newElement.textContent = 'Это новый элемент создан с помощью JavaScript';
newElement.style.border = '2px solid red';  

document.body.append(newElement);

const targetElement = document.getElementById('target-element');

const newBtn = document.createElement('button');
newBtn.type = 'button';
newBtn.textContent = 'Нажми на меня';
targetElement.append(newBtn);
