// Задание 1
// По аналогии с классным заданием про вампира.
// Создайте новый репозиторий на гитхаб, разместите в нем файл ИМЯ_ФАЙЛА.json на ваш выбор (например, можно про страну или автомобиль и т.д.). Опубликуйте на git pages. Получите ссылку, куда кидать fetch.
// После этого создайте страницу с подключенным js файлом. Получите информацию из вашего json при помощи fetch, отразите ее на странице.
async function fetchData() {
    try {
      const response = await fetch('https://raw.githubusercontent.com/SancosJak/WebProjects/main/HomeWorks/lesson_14/task_1/films_fake_api.json'); 
      const data = await response.json();
      return data.Movies;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
  
  async function renderMovies() {
    const movieListContainer = document.getElementById('movieList');
    const movies = await fetchData();
  
    movies.forEach(movie => {
      const movieContainer = document.createElement('div');
      movieContainer.classList.add('movie');
  
      movieContainer.innerHTML = `
        <h2>${movie.title} (${movie.releaseYear})</h2>
        <ul class="character-list">
          ${movie.characters.map(character => `<li>${character.name} - ${character.actor}</li>`).join("")}
        </ul>
      `;
  
      movieListContainer.appendChild(movieContainer);
    });
  }
  
  renderMovies();