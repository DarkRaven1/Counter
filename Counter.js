const decreaseElement = document.querySelector('.decrease-button-js');
const resetElement = document.querySelector('.reset-button-js');
const increaseElement = document.querySelector('.increase-button-js');

let counterNumber = 0;

decreaseElement.addEventListener('click',(e) => {
  counterNumber--;
  setNumber();
});

resetElement.addEventListener('click',() => {
  counterNumber = 0;
  setNumber();
});

increaseElement.addEventListener('click',() => {
  counterNumber++;
  setNumber();
})

const setNumber = () => {
  document.querySelector('.counter-number-js').innerHTML = `${counterNumber}`;
}


