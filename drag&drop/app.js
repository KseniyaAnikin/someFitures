const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);

item.addEventListener('dragend', dragend );

for (const place of placeholders) {
  place.addEventListener('dragover', dragover);
  place.addEventListener('dragenter', dragenter);
  place.addEventListener('dragleave', dragleave);
  place.addEventListener('drop', dragdrop);
}

function dragstart(event){
  event.target.classList.add('hold');
  setTimeout(()=> event.target.classList.add('hidden'),0)  
}

function dragend(event){
  event.target.classList.remove('hold', 'hidden');
}

function dragover(event){
  event.preventDefault();
}

function dragenter(event){
  event.target.classList.add('hovered');
}

function dragleave(event){
  event.target.classList.remove('hovered');
}

function dragdrop(event){
  event.target.classList.remove('hovered');
  event.target.append(item);
}