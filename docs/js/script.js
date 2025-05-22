const list = document.querySelector('.centered-list');
const boundingListRect = list.getBoundingClientRect();
const firstLi = list.querySelector('li:first-child');

function updateShift() {
  const halfWidth = firstLi.offsetWidth / 2;
  console.log(halfWidth);
  list.style.setProperty('--first-li-half-width', `-${halfWidth}px`);
}

console.log(`Top: ${boundingListRect.top}`)

window.addEventListener('resize', updateShift);
updateShift();
