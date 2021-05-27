const inputFontSize = document.querySelector('#font-size-control');

const textEl = document.querySelector('#text');

inputFontSize.addEventListener('input', onInputChange);

function onInputChange(event) {
  textEl.style.fontSize = event.currentTarget.value + 'px';
  console.log(event.currentTarget.value);
}
