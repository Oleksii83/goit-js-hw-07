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
  //   if (input.value === '') {
  //     span.textContent = 'незнакомец';
  //   }
  console.log('NoFocus');
}
input.addEventListener('input', onInputChange);
function onInputChange(event) {
  console.log(event.currentTarget.value);
  span.textContent = event.currentTarget.value;
  if (input.value === '') {
    span.textContent = 'незнакомец';
  }
}