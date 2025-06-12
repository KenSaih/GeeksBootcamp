
const form = document.getElementById('gifForm');
const categoryInput = document.getElementById('category');
const gifContainer = document.getElementById('gifContainer');
const deleteAllBtn = document.getElementById('deleteAllBtn');

const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const category = categoryInput.value.trim();
  if (!category) return;

  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${category}&rating=g&api_key=${API_KEY}`);
    if (!response.ok) throw new Error('Network response was not ok');

    const { data } = await response.json();
    const gifUrl = data.images?.fixed_height?.url;

    if (gifUrl) {
      const gifCard = document.createElement('div');
      gifCard.className = 'gif-card';

      const img = document.createElement('img');
      img.src = gifUrl;
      img.alt = category;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'DELETE';
      deleteBtn.addEventListener('click', () => gifCard.remove());

      gifCard.appendChild(img);
      gifCard.appendChild(deleteBtn);
      gifContainer.appendChild(gifCard);
    } else {
      alert('No GIF found for this category.');
    }

    categoryInput.value = '';
  } catch (error) {
    console.error('Fetch error:', error);
    alert('Something went wrong. Please try again.');
  }
});

deleteAllBtn.addEventListener('click', () => {
  gifContainer.innerHTML = '';
});