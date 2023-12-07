// 1. Написать функцию, которая принимает в качестве аргумента номер страницы, отправляет запрос по ссылке https://reqres.in/api/users?page={page_num} и выводит в консоль массив с пользователеями
// 2. Написать функцию render, которая из полученных данных отрисует карточки пользователей (фото + имя) и добавить их в container
// 3. В html добавить кнопки 1 и 2 и настроить переключение между страницами по клику на кнопки. По умолчанию при перезагрузке страницы прогружается первая страница

const container = document.querySelector('.container');

const getUsers = page_num => {
  fetch(`https://reqres.in/api/users?page=${page_num}`)
    .then(res => res.json())
    .then(json => render(json.data))
}

getUsers(1);

const render = data => {
  container.innerText = '';
  const users = data.map(({ first_name, avatar }) => {
    const cardElem = document.createElement('div');
    const avatarElem = document.createElement('img');
    const nameElem = document.createElement('p');

    avatarElem.src = avatar;
    avatarElem.alt = first_name;

    nameElem.innerText = first_name;

    cardElem.append(avatarElem, nameElem);
    return cardElem
  })
  container.append(...users)
}

// const first_btn = document.querySelector('.first_btn');
// const second_btn = document.querySelector('.second_btn');

const [ first_btn, second_btn ] = document.querySelectorAll('.triggers button');

first_btn.addEventListener('click', () => getUsers(1));
second_btn.addEventListener('click', () => getUsers(2));
