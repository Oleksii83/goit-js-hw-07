const input = document.querySelector('#validation-input');
// console.log(input);

input.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
  if (event.currentTarget.value.length === Number(input.dataset.length)) {
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
