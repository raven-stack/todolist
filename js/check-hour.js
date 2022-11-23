export function checkHour() {
  const title = document.getElementById("TodoTitle");
  const date = new Date().getHours();
  if (date >= 6 && date < 12) {
    title.textContent = "Good Morning";
  } else if (date >= 12 && date < 18) {
    title.textContent = "Good Afternoon";
  } else {
    title.textContent = "Good Evening";
  }
}
