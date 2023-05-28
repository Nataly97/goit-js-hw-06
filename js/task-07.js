const rangeInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

rangeInput.addEventListener("input", (evet) => {
    text.style.fontSize = evet.target.value + "px";
})