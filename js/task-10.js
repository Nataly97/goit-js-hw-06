function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let px = 20;
  for (let i = 0; i < amount; i++) {
    let box = document.createElement('div');
    px += 10;
    box.style.width = px + "px";
    box.style.height = px + "px";
    box.style.backgroundColor = getRandomHexColor();
    document.querySelector("div#boxes").appendChild(box);
  }
}

function destroyBoxes() {
  document.querySelector("div#boxes").innerHTML = "";
}

const inputValue = document.querySelector("input");
const btnCrear = document.querySelector("[data-create]");
const btnBorrar = document.querySelector("[data-destroy]");


btnCrear.addEventListener("click", (evet) => {
  destroyBoxes();
  evet.preventDefault();
  createBoxes(inputValue.value);
});

btnBorrar.addEventListener("click", (evet) => {
  evet.preventDefault();
  destroyBoxes();
});