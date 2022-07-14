const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColors = () => {
  body.style.backgroundColor = getRandomHexColor();

  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  startBtn.disabled = true;
  stopBtn.disabled = false;
};

const stopChangeColors = () => {
  clearInterval(timerId);

  // stopBtn.setAttribute('disabled', '');
  // startBtn.removeAttribute('disabled');
  stopBtn.disabled = true;
  startBtn.disabled = false;
};

startBtn.addEventListener('click', changeColors);
stopBtn.addEventListener('click', stopChangeColors);
