console.log("Let's get this party started!");

const gifs = document.querySelector('#gifs');
const search = document.querySelector('#search');
const form = document.querySelector('#form');
const remove = document.querySelector('#removeGifs');
const allGifs = document.querySelector('#gifs');

async function getGif(res) {
  let allResults = res.data.length;
  if (allResults) {
    let randomIndex = Math.floor(Math.random() * allResults);
    const newCol = document
      .getElementsByTagName('DIV')
      .addClassName('col-md-4');
    const newImg = document.createElement('IMG', {
      src: res.data[randomIndex].images.original.url,
      class: 'w-100',
    });
    newCol.append(newImg);
    newImg.append(newCol);
  }
}

form.addEventListener('submit', async function (e) {
  e.preventDefault();
  let searchData = search.value;
  console.log(searchData.value);
  searchData.value = '';

  const response = await axios.get('http://api.giphy.com/v1/gifs/search', {
    params: {
      q: searchData,
      api_key: 'Oh7uqwMBe1nXRURtKKLYJY5o84kuanIL',
    },
  });
  getGif(response.data);
});

remove.addEventListener('click', function () {
  allGifs.remove();
});
