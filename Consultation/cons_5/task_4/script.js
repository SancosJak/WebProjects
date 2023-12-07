// 1. Отправить fetch-запрос по ссылке https://dummyjson.com/products/1
// 2. Вывести полученные данные в консоль
// 3. Отрисовать карточку товара (images, title, description, price)
// 4. Стилизовать карточку товара

const container = document.querySelector('.container');

fetch('https://dummyjson.com/products/1')
  .then(res => res.json())
  .then(json => render(json))

const render = json => {
  const { images, title, description, price } = json;

  const cardElem = document.createElement('div');
  const titleElem = document.createElement('p');
  const descrElem = document.createElement('p');
  const priceElem = document.createElement('p');
  const imgElem = document.createElement('img');

  imgElem.src = images[0];
  imgElem.alt = title;

  // titleElem.innerText = `Title: ${title}`; // интерполяция
  titleElem.innerText = 'Title: ' + title; // конкатенация
  descrElem.innerText = `Description: ${description}`;
  priceElem.innerText = `Price: ${price}$`;

  cardElem.append(imgElem, titleElem, descrElem, priceElem);
  container.append(cardElem);
}
