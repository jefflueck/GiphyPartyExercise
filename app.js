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

async function getInput(searchData) {
  e.preventDefault();
  searchData = search.value;
  console.log(searchData);
  searchData.value = '';
  const response = await axios.get('http://api.giphy.com/v1/gifs/search', {
    params: {
      q: searchData,
      api_key: 'Oh7uqwMBe1nXRURtKKLYJY5o84kuanIL',
    },
  });
  getGif(response.data);
}

// returns form is null on submit, then a 404 after that error line
form.addEventListener('submit', getInput());

//   const response = await axios.get('http://api.giphy.com/v1/gifs/search', {
//     params: {
//       q: searchData,
//       api_key: 'Oh7uqwMBe1nXRURtKKLYJY5o84kuanIL',
//     },
//   });
//   getGif(response.data);
// }

remove.addEventListener('click', function () {
  allGifs.remove();
});
