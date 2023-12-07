// 1. Отправить запрос по ссылке https://dummyjson.com/users и получить массив с данными о пользователях
// 2. Из полученных данных отрисовать карточки пользователей (аватар, имя + фамилия, возраст)
// 3. Стилизовать карточки + сделать из контейнера грид
// 4. Отсортировать по возрасту
// 5. Отсортировать по фамилии (в алфавитном порядке)


const container = document.querySelector('.container');
const sort_by_age = document.querySelector('.sort_by_age');

fetch('https://dummyjson.com/users')
  .then(res => res.json())
  .then(json => render(json.users))

const render = array => {
  array
    .slice()
    .sort((a, b) => a.lastName.localeCompare(b.lastName))
    .forEach(({ firstName, lastName, age, image }) => {
      const cardElem = document.createElement('div');
      const nameElem = document.createElement('p');
      const ageElem = document.createElement('p');
      const avatarElem = document.createElement('img');

      avatarElem.src = image;
      avatarElem.alt = `${firstName} ${lastName}`;

      nameElem.innerText = `${firstName} ${lastName}`;
      ageElem.innerText = `${age} years old`;

      cardElem.append(avatarElem, nameElem, ageElem);
      container.append(cardElem);
    })
}

// Сортировка по возрасту
// [...array].sort((a, b) => a.age - b.age)
// array.map(el => el).sort((a, b) => a.age - b.age)
// array.slice().sort((a, b) => a.age - b.age)


//ДЗ
// 1. Отправить запрос по ссылке https://jsonplaceholder.typicode.com/todos
// 2. Из полученных данных отрисовать карточки (title, status)
// 3. Если задача выполнена, то в статус записать 'done'. Если не выполнена - 'not done'
// 4. Стилизовать карточки, сделать из контейнера грид
// 5. Если задача выполнена, то покрасить ее в зеленый, а если не выполнена, то в серый
