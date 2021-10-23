

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startButton: document.querySelector('[data-action="start"]'),
    stopButton: document.querySelector('[data-action="stop"]'),
    bodyColor:document.body,
}
refs.startButton.addEventListener('click', onColorChange);
refs.stopButton.addEventListener('click', onStopChanging);

let intervalId = null;

function onColorChange(){
  refs.startButton.disabled = true;
  intervalId = setInterval(() => {
    refs.bodyColor.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
  }, 1000);
};
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStopChanging(){
    refs.startButton.disabled = false;
  clearInterval(intervalId)
}