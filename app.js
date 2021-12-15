// console.log("Let's get this party started!");

const gifs = document.querySelector('#gifs');
const search = document.querySelector('#search');
const form = document.querySelector('#form');
const remove = document.querySelector('#removeGifs');
const allGifs = document.querySelector('#gifs');

async function getGif(res) {
  let allResults = res.data.length;
  if (allResults) {
    let newCol = document.createElement('div');
    let randomIndex = Math.floor(Math.random() * allResults);
    const newImg = document.createElement('IMG');
    const src = res.data[randomIndex].images.original.url;
    // newCol.className();
    console.log(newImg);
    console.log(res.data[randomIndex].images.original.url);
    newImg.setAttribute('src', src);
    newImg.classList.add('mw-100');
    newImg.classList.add('p-1');
    // newImg.className('col md-4');
    // allGifs.append((newCol = `res.data[randomIndex].images.original.url`));
    newCol.append(newImg);
    allGifs.append(newCol);
    // newCol.innerHTML = '<img src="' + newImg + '"alt=image"/>';
  }
}

async function getInput(searchData) {
  // e.preventDefault();
  const response = await axios.get('http://api.giphy.com/v1/gifs/search', {
    params: {
      q: searchData,
      api_key: 'Oh7uqwMBe1nXRURtKKLYJY5o84kuanIL',
    },
  });
  getGif(response.data);
}

// returns form is null on submit, then a 404 after that error line
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const searchData = search.value;
  console.log(searchData);
  getInput(searchData);
  searchData.value = '';
});

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
