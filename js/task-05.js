const input = document.querySelector('#name-input');
// console.log(input);
const span = document.querySelector('#name-output');
// console.log(span);

input.addEventListener('focus', onInputFocus);
function onInputFocus() {
  console.log('Focus');
}
input.addEventListener('blur', onInputBlur);
function onInputBlur() {
  console.log('NoFocus');
}
input.addEventListener('input', onInputChange);
function onInputChange(event) {
  console.log(event.currentTarget.value);
  event.textContent = event.currentTarget.value || 'незнакомец';
  if (input.value === '') {
  }
}
