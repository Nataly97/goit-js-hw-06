const textInput = document.querySelector("#validation-input");
const color = document.querySelector("style");

textInput.addEventListener("blur", () => {
    const inputLength = textInput.value.length;
    const minInput = textInput.getAttribute("data-length");

    if (inputLength < minInput) {
        return textInput.classList.add("invalid");
    }
    textInput.classList.remove("invalid");
    return textInput.classList.add(("valid"));
});