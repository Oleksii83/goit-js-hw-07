const input = document.querySelector('#validation-input');
// console.log(input);
input.addEventListener('blur', onInputBlur);
function onInputBlur() {
  if (input.value.length > 6) {
    span.textContent = 'незнакомец';
  }
  console.log('NoFocus');
}
