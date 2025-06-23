const generateBtn = document.getElementById('generateBtn');
const loading = document.getElementById('loading');
const characterInfo = document.getElementById('characterInfo');
const error = document.getElementById('error');
const favBtn = document.getElementById('favBtn');

const nameEl = document.getElementById('name');
const heightEl = document.getElementById('height');
const genderEl = document.getElementById('gender');
const birthYearEl = document.getElementById('birthYear');
const homeworldEl = document.getElementById('homeworld');

const historyList = document.getElementById('historyList');
const favoritesList = document.getElementById('favoritesList');

let currentCharacter = null;

generateBtn.addEventListener('click', getRandomCharacter);

async function getRandomCharacter() {
  const randomId = Math.floor(Math.random() * 83) + 1;
  const apiUrl = `https://www.swapi.tech/api/people/${randomId}`;

  characterInfo.classList.add('hidden');
  error.classList.add('hidden');
  favBtn.classList.add('hidden');
  loading.classList.remove('hidden');

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error("Failed to fetch character.");
    const data = await res.json();
    const person = data.result.properties;

    const homeworldRes = await fetch(person.homeworld);
    const homeworldData = await homeworldRes.json();
    const homeworldName = homeworldData.result.properties.name;

    // Update DOM
    nameEl.textContent = person.name;
    heightEl.textContent = person.height;
    genderEl.textContent = person.gender;
    birthYearEl.textContent = person.birth_year;
    homeworldEl.textContent = homeworldName;

    currentCharacter = {
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year
    };

    characterInfo.classList.remove('hidden');
    favBtn.classList.remove('hidden');

    // Update history
    const listItem = document.createElement('li');
    listItem.textContent = `👤 ${person.name} (${person.gender}, ${person.birth_year})`;
    historyList.prepend(listItem);

  } catch (err) {
    console.error(err);
    error.classList.remove('hidden');
  } finally {
    loading.classList.add('hidden');
  }
}

favBtn.addEventListener('click', () => {
  if (currentCharacter) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.unshift(currentCharacter);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayFavorites();
  }
});

function displayFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favoritesList.innerHTML = '';
  favorites.forEach(fav => {
    const li = document.createElement('li');
    li.textContent = `⭐ ${fav.name} (${fav.gender}, ${fav.birthYear})`;
    favoritesList.appendChild(li);
  });
}

// Display saved favorites on load
displayFavorites();