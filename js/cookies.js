const cookieNotice = document.getElementById("cookieNotice");
const acceptBtn = document.getElementById("acceptCookies");

if (!localStorage.getItem("cookiesAccepted")) {
  cookieNotice.classList.remove("d-none");
}


acceptBtn.addEventListener("click", () => {
  localStorage.setItem("cookiesAccepted", "true");
  cookieNotice.classList.add("d-none");
});
