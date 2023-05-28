function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const fondo = document.querySelector("body");
const textColor = document.querySelector(".color");
const btnColor = document.querySelector("button.change-color");

btnColor.addEventListener("click", () => {
  const color = getRandomHexColor();
  fondo.style.backgroundColor = color;
  textColor.textContent = color;
});
