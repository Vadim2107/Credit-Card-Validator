import getValidCreditCard from './validate';
import whichCard from './whichCard';

const form = document.querySelector('[data-widget="card-num-form-widget"]');
const input = form.querySelector('[data-id="card-num-input"]');
const formBtn = form.querySelector('[data-id="card-num-submit"]');
const message = document.querySelector('.message');
const allCards = document.querySelectorAll('.card');

formBtn.addEventListener('click', (e) => {
  e.preventDefault();

  [...allCards].forEach((item) => {
    if (item.classList.contains('card-active')) {
      item.classList.remove('card-active');
    }
  });

  const isValid = getValidCreditCard(input.value);

  if (isValid) {
    message.classList.add('hidden');
    input.classList.remove('invalid');
    input.classList.add('valid');
    const cardName = whichCard(input.value);
    const cardImg = document.querySelector(cardName);

    if (!cardImg) {
      message.classList.remove('hidden');
    } else {
      cardImg.classList.add('card-active');
      form.reset();
    }
  } else {
    message.classList.remove('hidden');
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
