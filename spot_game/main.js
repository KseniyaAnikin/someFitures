const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
let time = 0;
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');

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
  setInterval(decreaseTime, 1000)
  setTime(time);
}

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
}

function setTime(value){
  timeEl.innerHTML = `00:${value}`;
}

function finishGame(){

}

function createRandomSpot(){
  const spot = document.createElement('div');
  spot.classList.add('circle');
  spot.style.width = '15px';
  spot.style.height = '15px';
  board.append('spot');
}

startGame();

//дергающийся таймер