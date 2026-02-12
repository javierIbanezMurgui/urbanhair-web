const form = document.querySelector("form");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", e => {
  successMsg.classList.remove("d-none");

    form.reset();
});
