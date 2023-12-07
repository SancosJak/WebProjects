// 1. Отправить fetch-запрос по ссылке https://dummyjson.com/products
// 2. Вывести полученные по запросу данные (массив products) в консоль
// 3. В container отрисовать карточки продуктов (images, title, price), у которых цена >= 500
// 4. Если у товара рейтинг >= 4.5, то цвет заднего фона у этого товара сделать светло-зеленым.
// А если меньше - то светло-желтым

const container = document.querySelector(".container");

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((json) => render(json.products));

const render = (arr) => {
  arr.forEach(({ images, title, price, rating }) => {
    if (price >= 500) {
      const cardElem = document.createElement("div");
      const imgElem = document.createElement("img");
      const titleElem = document.createElement("p");
      const priceElem = document.createElement("p");

      imgElem.src = images[0];
      imgElem.alt = title;

      titleElem.innerText = `Title: ${title}`;
      priceElem.innerText = `Price: ${price}`;

      cardElem.style.backgroundColor =
        rating >= 4.5 ? "lightgreen" : "lightyellow";

      cardElem.append(imgElem, titleElem, priceElem);
      container.append(cardElem);
    }
  });
};
