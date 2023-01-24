const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
let time = 0;
let score = 0;
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const COLORS = ['red', 'blue', 'green', 'yellow', 'white', 'lime', 'pink'];

startBtn.addEventListener('click', (event)=> {
 event.preventDefault();
 screens[0].classList.add('up');
});

timeList.addEventListener('click', event => {
  if(event.target.classList.contains('time-btn')){
    time = parseInt(event.target.getAttribute('data-time'));
    screens[1].classList.add('up');
    startGame();
  }
});

function startGame(){
  setInterval(decreaseTime, 1000);
  createRandomSpot();
  setTime(time);
};

function decreaseTime(){
  if(time === 0){
    finishGame();
  }else{
    let current = --time;
  if(current < 10){
    current = `0${current}`;
  }
  setTime(current);
  }  
};

function setTime(value){
  timeEl.innerHTML = `00:${value}`;
};

function finishGame(){
  board.innerHTML = `<h1>Score:${score}<h1/>`;
  timeEl.parentNode.classList.add('hide');
};

function createRandomSpot(){
  const spot = document.createElement('div');
  const size = getRandomNumber(10, 40);
  const {width, height} = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);
  spot.classList.add('circle');
  spot.style.width = `${size}px`;
  spot.style.height = `${size}px`;
  spot.style.top = `${y}px`;
  spot.style.left = `${x}px`;
  spot.style.background = getRandomColor();
  board.append(spot);
};

function getRandomNumber(min, max){
  return Math.round(Math.random() * (max - min) + min)
};

function getRandomColor(){
  const index = Math.floor(Math.random()*COLORS.length);
  return COLORS[index];
};

board.addEventListener('click', event => {
  if(event.target.classList.contains('circle')){
    score ++;
    event.target.remove();
    createRandomSpot();
  }
});
