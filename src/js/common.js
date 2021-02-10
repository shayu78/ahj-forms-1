function getRandomValue(min, max) {
  return min + (max + 1 - min) * Math.random();
}

export default function setElementRandomPosition(el) {
  const element = el;
  element.style.top = `${getRandomValue(0, 2000)}px`;
  element.style.left = `${getRandomValue(0, 2000)}px`;
}

export function setElementCenterPosition(el) {
  const element = el;
  element.classList.add('centered');
}
