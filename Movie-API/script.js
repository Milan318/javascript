const API_KEY = '99dc95f7'; // Replace with your OMDb API key
let currentPage = 1;
let currentQuery = 'marvel';

const movieContainer = document.getElementById('movieContainer');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const loadMoreBtn = document.getElementById('loadMoreBtn');

async function fetchMovies(query, page) {
  const responses = await Promise.all([
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page}`),
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page + 1}`)
  ]);
  const results = await Promise.all(responses.map(res => res.json()));
  return results.flatMap(r => r.Search || []);
}

function displayMovies(movies) {
  movies.forEach(movie => {
    const col = document.createElement('div');
    col.className = 'col-6 col-md-3';
    col.innerHTML = `
      <div class="card h-100">
        <img src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/300x445?text=No+Image'}"
             class="card-img-top" alt="${movie.Title}">
        <div class="card-body">
          <h6 class="card-title">${movie.Title}</h6>
          <p class="card-text text-muted">${movie.Year}</p>
        </div>
      </div>
    `;
    movieContainer.appendChild(col);
  });
}

async function loadMovies(reset = false) {
  if (reset) {
    movieContainer.innerHTML = '';
    currentPage = 1;
  }
  const movies = await fetchMovies(currentQuery, currentPage);
  displayMovies(movies);
  currentPage += 2;
}

searchBtn.addEventListener('click', () => {
  currentQuery = searchInput.value.trim() || currentQuery ;
  loadMovies(true);
});

loadMoreBtn.addEventListener('click', () => {
  loadMovies();
});

// Initial load
loadMovies();