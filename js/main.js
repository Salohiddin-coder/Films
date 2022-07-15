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







