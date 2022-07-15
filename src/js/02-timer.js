import flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/confetti.css';
// import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('[data-start]');

const timerDeadline = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      return Notiflix.Notify.failure('Please choose a date in the future', {
        width: '460px',
      });
    }
    startBtn.disabled = false;
  },
});

class Timer {
  #intervalId = null;

  constructor(deadline) {
    this.deadline = deadline;
  }

  start() {
    this.#intervalId = setInterval(() => {
      const now = Date.now();
      const ms = this.deadline - now;

      if (ms <= 0) {
        this.stop();

        return;
      }

      const { days, hours, minutes, seconds } = this.convertMs(ms);

      document.querySelector('[data-days]').textContent =
        this.addLeadingZero(days);
      document.querySelector('[data-hours]').textContent =
        this.addLeadingZero(hours);
      document.querySelector('[data-minutes]').textContent =
        this.addLeadingZero(minutes);
      document.querySelector('[data-seconds]').textContent =
        this.addLeadingZero(seconds);
    }, 1000);
  }

  stop() {
    clearInterval(this.#intervalId);
  }

  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }

  addLeadingZero(value) {
    return String(value).padStart(2, 0);
  }
}

function onTimerStart() {
  const startTimer = new Timer(timerDeadline.latestSelectedDateObj.getTime());

  startTimer.start();
}

startBtn.addEventListener('click', onTimerStart);
