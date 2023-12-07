//1. Написать функцию, принимающую в качестве аргумента id (число), отправляющую fetch-запрос по ссылке https://dummyjson.com/users/{id} и выводящую полученные данные в консоль
//2. Написать функцию, принимающую полученный объект и отрисовывающую карточку пользователя (имя + фамилия, username)


const container = document.querySelector('.container');

const getUser = id => {
  fetch(`https://dummyjson.com/users/${id}`)
    .then(res => res.json())
    .then(json => render(json))
}

getUser(4);

const render = ({ lastName, firstName, username }) => {
  const cardElem = document.createElement('div');
  const nameElem = document.createElement('p');
  const usernameElem = document.createElement('p');

  nameElem.innerText = `Name: ${firstName} ${lastName}`;
  usernameElem.innerText = `Username: ${username}`;

  cardElem.append(nameElem, usernameElem);
  container.append(cardElem);
}
