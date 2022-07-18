let elList = document.querySelector('.js-list');

// ----------Render Function(to DOM)------------------------

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
    let itemButtonModal = document.createElement('button');
    itemButtonModal.className = 'js-modal';
    itemButtonModal.textContent = 'More info';
    newList.appendChild(itemButtonModal);
    
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
  let modalList = document.createElement('ul');
  modalList.className = 'modal-list';
  modalList.id = object.number;
  let modalName = document.createElement('li');
  modalName.textContent = object.title;
  modalName.classList = 'modal-name';
  modalList.appendChild(modalName);
  let modalInfo = document.createElement('li');
  modalInfo.className = 'modal-info';
  modalInfo.textContent = object.overview;
  modalList.appendChild(modalInfo);
  let modalClose = document.createElement('li');
  let modalCloseButton = document.createElement('button');
  modalCloseButton.className = 'modal-button';
  modalCloseButton.textContent = 'Close';
  modalClose.appendChild(modalCloseButton);
  modalList.appendChild(modalClose);

  node.appendChild(modalList)
} 

films.number = 1;

films.map((el,index) => el.number = index + 1)

elList.addEventListener('click',function(evt){
  if(evt.target.className == 'js-modal'){
    films.forEach(el => {
      if(el.number == modalList.id){
        modalCreator(el,elModal)
      } else {
        console.log(modalList.id);
      }
    })
  } else {
    console.log('2');
  }
})

obj = {
  number: 1,
  title: 'Dfgtresxcvbgf',
  overview: 'sdfdgfbdfv'
}

modalCreator(obj,elModal)






























