export function toggleOffcanvas() {
  const offcanvasBox = document.getElementById("OffcanvasMenu");
  const offcanvasCloseButton = document.getElementById("OffcanvasClose");
  const offcanvasShowButton = document.getElementById("BannerBtn");

  offcanvasShowButton.addEventListener("click", function () {
    offcanvasBox.classList.add("is-visible");
  });

  offcanvasCloseButton.addEventListener("click", function () {
    offcanvasBox.classList.remove("is-visible");
  });
}
