// const itemAllEl = document.querySelectorAll('.item');
// console.log(itemAllEl);
// const itemEl = document.querySelector('.item');
// console.log(itemEl.textContent);
// console.log(itemEl.children[1]);

// const textEl = itemAllEl.firstChild;
// console.log(textEl.textContent);

const categoriesAllEl = document.querySelector('ul#categories').children.length;
let categoriesChild = categories.children.length;
console.log(`В списке ${categoriesChild} категории.`);

// const categoriesEl = document.querySelector('ul#categories');
// console.log(categoriesEl.firstElementChild);
const ul = Array.from(document.querySelector('#categories').children);
for (let elem of ul) {
  let category = elem.firstElementChild.textContent;
  let quantityElem = elem.lastElementChild.children.length;
  console.log(`Категория: ${category} \nКоличество элементов: ${quantityElem}`);
}
