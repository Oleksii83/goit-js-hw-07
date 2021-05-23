const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsItem = document.querySelector('#ingredients');

const elements = ingredients.forEach(elem => {
  const createEl = document.createElement('li');
  createEl.textContent = elem;

  console.log(createEl);
  ingredientsItem.appendChild(createEl);
});
