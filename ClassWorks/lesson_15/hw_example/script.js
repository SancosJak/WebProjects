const titleElement = document.getElementById("title");
const yearElement = document.getElementById("year");
const authorElement = document.getElementById("author");
const genreElement = document.getElementById("genre");
const imageElement = document.getElementById("book-image");

async function loadBook() {
  try {
    const res = await fetch("https://alisherkhamidov.github.io/book-api/book.json");

    if (!res.ok) {
      throw new Error(`Ошибка при загрузке: ${res.status} ${res.statusText}`);
    }

    const obj = await res.json();
    console.log(obj);

    const { title, author, year, genre, cover } = obj;
    titleElement.textContent = title;
    yearElement.textContent = year;
    authorElement.textContent = author;
    genreElement.textContent = genre;
    imageElement.src = cover;
  } catch (error) {
    console.error(`Произошла ошибка: ${error.message}`);
  }
}

loadBook();