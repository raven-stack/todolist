export function getDateInfo() {
  const info = document.querySelector(".date__info");
  const weekday = document.querySelector(".date__weekday");
  const clock = document.querySelector(".clock");

  const date = new Date();

  info.textContent = `${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}`;

  switch (date.getDay()) {
    case 0:
      weekday.textContent = "Niedziela";
      break;
    case 1:
      weekday.textContent = "Poniedziałek";
      break;
    case 2:
      weekday.textContent = "Wtorek";
      break;
    case 3:
      weekday.textContent = "Środa";
      break;
    case 4:
      weekday.textContent = "Czwartek";
      break;
    case 5:
      weekday.textContent = "Piątek";
      break;
    case 6:
      weekday.textContent = "Sobota";
      break;
    default:
      weekday.textContent = "Dzień";
      break;
  }

  // aktualizujemy zegar co sekundę (1000ms = 1s)
  setInterval(function () {
    const intervalDate = new Date();
    let h = intervalDate.getHours();
    let m = intervalDate.getMinutes();
    let s = intervalDate.getSeconds();

    let formatedS = s < 10 ? "0" + s : s;
    let formatedM = m < 10 ? "0" + m : m;
    let formatedH = h < 10 ? "0" + h : h;

    clock.textContent = `${formatedH}:${formatedM}:${formatedS}`;
  }, 1000);
}
