const elements = {
  jokeContainer: document.getElementById('joke-container'),
  chuckImage: document.getElementById('chuck-image'),
  favoritesList: document.getElementById('favorites-list'),
  favoriteTemplate: document.getElementById('favorite-template')
};

let currentJoke = null;

// ========== INDEX ==========
if (document.getElementById('new-joke-btn')) {
  document.getElementById('new-joke-btn').addEventListener('click', getNewJoke);
  document.getElementById('favorite-btn').addEventListener('click', addToFavorites);
}

// ========== FAVORITES ==========
if (document.getElementById('favorites-list')) {
  loadFavorites();
}

// Busca piada da API
async function getNewJoke() {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();

    currentJoke = {
      id: data.id,
      text: data.value,
      image: data.icon_url
    };

    elements.jokeContainer.textContent = currentJoke.text;
    elements.chuckImage.src = currentJoke.image; // puxada da API
  } catch (error) {
    console.error('Erro:', error);
    elements.jokeContainer.textContent = 'Erro ao carregar piada!';
  }
}

// Favoritar com localStorage
function addToFavorites() {
  if (!currentJoke) return;

  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  if (favorites.some(fav => fav.id === currentJoke.id)) {
    alert('Essa piada já está nos favoritos!');
    return;
  }

  favorites.push(currentJoke);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  alert('Piada adicionada aos favoritos!');
}

// Carregar favoritos
function loadFavorites() {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  elements.favoritesList.innerHTML = favorites.length ? '' : '<p>Nenhum favorito salvo ainda!</p>';

  favorites.forEach(fav => {
    const clone = elements.favoriteTemplate.content.cloneNode(true);
    const item = clone.querySelector('.favorite-item');

    item.querySelector('.favorite-img').src = fav.image;
    item.querySelector('.favorite-text').textContent = fav.text;
    item.querySelector('.delete-btn').addEventListener('click', () => deleteFavorite(fav.id));

    elements.favoritesList.appendChild(clone);
  });
}

// Remover favorito
function deleteFavorite(id) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites = favorites.filter(fav => fav.id !== id);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  loadFavorites();
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('joke-container')) getNewJoke();
});
