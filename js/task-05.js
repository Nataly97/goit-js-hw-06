const texInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");


texInput.addEventListener("input", (event) => {
    event.currentTarget;
    if (texInput.value === "") {
        return textOutput.textContent = "Anónimo";
    }
    textOutput.textContent = event.currentTarget.value;
});