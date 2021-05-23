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
// console.log(ingredients);

// const elements = ingredients.forEach(elem => console.log(elem));

// const option = ingredients[0];

// const ingredientsEl = document.createElement('li');
// ingredientsEl.classList.add('newEl');
// ingredientsEl.textContent = option;
// console.log(ingredientsEl);

// const maps = prod.map(ingredientsEl);
// console.log(maps);

// const elements = [];
// for (let i = 0; i < ingredients.length; index++) {
//   const option = ingredients[i];
//   const ingredientsEl = document.createElement('li');
//   ingredientsEl.classList.add('newEl');
//   elements.push(option);
// }
// console.log(elements);

// 1hour 40minutes- new function

// 1hour 28 minutes вставка нескольких элементов


Вариант 1
// const imageEl = document.querySelector('#gallery');
// for (const image of images) {
//   const li = document.createElement('li');
//   const imageTag = document.createElement('img');
//   li.appendChild(imageTag);
//   imageEl.appendChild(li);
//   imageTag.setAttribute('alt', image.alt);
//   imageTag.setAttribute('src', image.url);
//   imageTag.setAttribute('width', 640);
//   console.log(image);
// }
// document.append(imageEl);