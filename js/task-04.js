const decrementBtn = document.querySelector('#counter button[data-action="decrement');
const incrementBtn = document.querySelector('#counter button[data-action="increment');

console.log(decrementBtn.dataset.action); //save
console.log(incrementBtn.dataset.action); //save

let counterValue = 0;

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    const newValue = document.querySelector("#value");
    newValue.textContent = counterValue;
});
incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    const newValue = document.querySelector("#value");
    newValue.textContent = counterValue;
});

