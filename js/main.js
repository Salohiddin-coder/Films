let elList = document.querySelector('.js-list');


function renderToHTML(array,node){
  elList.innerHTML = "";
  for(let i = 0; i < array.length; i++){
    elList.className = 'list'
    let newItem = document.createElement('li');
    let newList = document.createElement('ul');
    newItem.className = 'box';
    newList.className = 'wrapper'
    newItem.appendChild(newList);
    let itemImg = document.createElement('li');
    let itemPic = document.createElement('img');
    itemImg.appendChild(itemPic);
    itemPic.src = array[i].poster;
    newList.appendChild(itemImg);
    let itemTitle = document.createElement('li');
    itemTitle.className = 'films-name';
    itemTitle.textContent = array[i].title;
    newList.appendChild(itemTitle);
    let itemInfo = document.createElement('li');
    itemInfo.className = 'films-info';
    itemInfo.textContent = array[i].overview;
    newList.appendChild(itemInfo);
    let itemGenre = document.createElement('li');
    itemGenre.className = 'films-genre';
    itemGenre.textContent = array[i].genres;
    newList.appendChild(itemGenre)
    
    node.appendChild(newItem);
  }
}

renderToHTML(films,elList)

let elSelect = document.querySelector('.js-selection');

let genres = [];

films.forEach(el => genres.push(...el.genres));

let genresList = new Set(genres);

genresList.forEach(el => {
  let newOption = document.createElement('option');
  newOption.textContent = el;
  elSelect.appendChild(newOption)
})

elSelect.addEventListener('change',function(){
  let newResult = [];
  elList.innerHTML = '';
  let selectionValue = elSelect.value;
  for(item of films){
    if(item.genres.includes(selectionValue)){
      newResult.push(item)
      renderToHTML(newResult,elList)
    }
  }
})


// ----------------- SORT ------------------

let elSort = document.querySelector('.js-sort');

function azSort(){
  const sortedValue = films.sort((a,b) => {
    if(a.title < b.title){
      return -1
    } else {
      return 1
    }
  })
  renderToHTML(sortedValue,elList)
}

function zaSort(){
  const reverseSorted = films.sort((a,b) => {
    if(a.title < b.title){
      return 1
    } else {
      return -1
    }
  })
  renderToHTML(reverseSorted,elList)
}

elSort.addEventListener('change',function(){
  let sortValue = elSort.value;
  if(sortValue == 'A - Z'){
    azSort()
  } else {
    zaSort()
  }
})



