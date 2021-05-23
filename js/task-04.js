const CounterBtn = document.querySelector('#counter');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value');

const calc = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

incrementButton.addEventListener('click', () => {
  console.log(+1);
  calc.increment();
  console.log(calc);
  counter.textContent = calc.value;
});
decrementButton.addEventListener('click', () => {
  console.log(-1);
  calc.decrement();
  console.log(calc);
  counter.textContent = calc.value;
});
