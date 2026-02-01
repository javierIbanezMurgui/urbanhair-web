document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const botonModo = document.getElementById("modo");

    if (botonModo) {
        botonModo.addEventListener("click", () => {
            body.classList.toggle("dark");
            if (body.classList.contains("dark")) {
                botonModo.textContent = "☀️";
            } else {
                botonModo.textContent = "🌙";
            }
        });
    }
});