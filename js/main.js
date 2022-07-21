let elList = document.querySelector('.js-list');

// ----------Render Function(to DOM)------------------------

function renderToHTML(array,node){
  elList.innerHTML = "";
  for(film of array){
    elList.className = 'list'
    let newItem = document.createElement('li');
    let newList = document.createElement('ul');
    newItem.className = 'box';
    newList.className = 'wrapper'
    newItem.appendChild(newList);
    let itemImg = document.createElement('li');
    let itemPic = document.createElement('img');
    itemImg.appendChild(itemPic);
    itemPic.src = film.poster;
    newList.appendChild(itemImg);
    let itemTitle = document.createElement('li');
    itemTitle.className = 'films-name';
    itemTitle.textContent = film.title;
    newList.appendChild(itemTitle);
    let itemModal = document.createElement('li');
    let itemButtonModal = document.createElement('button');
    itemButtonModal.className = 'js-modal';
    itemButtonModal.dataset.filmId = film.id;
    itemButtonModal.textContent = 'More info';
    itemModal.appendChild(itemButtonModal);
    newList.appendChild(itemModal);
    let bookmarkButton = document.createElement('button');
    bookmarkButton.className = 'bookmark-button';
    bookmarkButton.textContent = 'Bookmark';
    itemModal.appendChild(bookmarkButton)
    
    node.appendChild(newItem);
  }
}

renderToHTML(films,elList)

// ------------------------Sort by Genres------------------------------

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

// ------------------------- Modal creator Function ------------------------------

let elModal = document.querySelector('.js-modal-box');

function modalCreator(object,node){
  for(item of object){
    let modalWrapper = document.createElement('div');
    modalWrapper.className = 'modal-wrapper';
    let modalList = document.createElement('ul');
    modalList.className = 'modal-list';
    let modalName = document.createElement('li');
    modalName.textContent = item.title;
    modalName.classList = 'modal-name';
    modalList.appendChild(modalName);
    let modalInfo = document.createElement('li');
    modalInfo.className = 'modal-info';
    modalInfo.textContent = item.overview;
    modalList.appendChild(modalInfo);
    let modalClose = document.createElement('li');
    let modalCloseButton = document.createElement('button');
    modalClose.appendChild(modalCloseButton);
    modalCloseButton.className = 'modal-button';
    modalCloseButton.textContent = 'Close';
    modalList.appendChild(modalClose);
    modalWrapper.appendChild(modalList);
    node.appendChild(modalWrapper)
  }
} 

elList.addEventListener('click', function(evt){
  if(evt.target.className == 'js-modal'){
    elModal.innerHTML = ""
    let elementId = evt.target.dataset.filmId;
    
    let findedFilms = films.filter(el => el.id == elementId);
    
    elModal.classList.add('js-modal-box-open')
    
    modalCreator(findedFilms,elModal);
  }
})

elModal.addEventListener('click', function(evt){
  if(evt.target.className == 'modal-button'){
    elModal.classList.remove('js-modal-box-open')
  }
})

































