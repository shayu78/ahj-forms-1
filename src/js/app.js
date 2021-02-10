import setElementRandomPosition, { setElementCenterPosition } from './common';

const buttonElement = document.querySelector('.button');
const popoverElement = document.querySelector('.popover');

buttonElement.addEventListener('click', () => {
  popoverElement.classList.toggle('hidden');
  const buttonElementCoords = buttonElement.getBoundingClientRect();
  popoverElement.style.top = `${(buttonElementCoords.top + window.scrollY - popoverElement.offsetHeight - 10)}px`;
  popoverElement.style.left = `${(buttonElementCoords.left + window.scrollX + buttonElement.offsetWidth / 2 - popoverElement.offsetWidth / 2)}px`;
});

setElementCenterPosition(buttonElement);

setInterval(() => {
  popoverElement.classList.add('hidden');
  setElementRandomPosition(buttonElement);
}, 10000);
