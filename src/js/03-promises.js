import Notiflix from 'notiflix';

const formSubmit = document.querySelector('.form');

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const Obj = {
      position: position,
      delay: delay,
    };

    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(Obj);
      } else {
        reject(Obj);
      }
    }, delay);
  });

  return promise;
}

const submitForm = event => {
  event.preventDefault();

  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  const delayEl = Number(delay.value);
  const amountEl = Number(amount.value);
  const stepEl = Number(step.value);

  for (let i = 0; i < amountEl; i++) {
    createPromise(i + 1, delayEl + stepEl * i)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }

  event.currentTarget.reset();
};

formSubmit.addEventListener('submit', submitForm);
