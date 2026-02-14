window.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookieNotice");
  const btn = document.getElementById("acceptCookies");

  if (!localStorage.getItem("cookiesAccepted")) {
    banner.classList.remove("d-none");
  }

  btn.addEventListener("click", () => {
    banner.classList.add("d-none");
    localStorage.setItem("cookiesAccepted", "true");
  });
});
