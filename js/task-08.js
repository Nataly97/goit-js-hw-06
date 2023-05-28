const form = document.querySelector(".login-form");

form.addEventListener("submit", (evet) => {
    evet.preventDefault();
    const { elements:
        { email, password }
    } = evet.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Todos los espacios deben ser rellenados");
    }
    // console.log(`${email.name}: ${email.value}, ${password.name}: ${password.value}`);
    const datos = {}
    datos.email = email.value;
    datos.password = password.value;
    console.log(datos);
    evet.currentTarget.reset();
})