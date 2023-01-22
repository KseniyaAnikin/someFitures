const board = document.querySelector('#board');
const COLORS = ['#40E0D0', '#20B2AA', '#48D1CC', '#008B8B', '#00FFFF', '#00CED1', '#00BFFF', '#1E90FF', '#4169E1'];

function getSquares(){
  let width = board.clientWidth;
  let height = board.clientHeight;
  let squaresNumber = (width/16)*(height/16);
  console.log(squaresNumber)
  return squaresNumber;
}

for(let i = 0; i < getSquares(); i++){
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', ()=>
  setColor(square)
  );

  square.addEventListener('mouseleave', ()=>
  removeColor(square)
  );

  board.append(square);
};

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor(){
  const index = Math.floor(Math.random()*COLORS.length);
  return COLORS[index];
}