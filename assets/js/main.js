const chart = document.querySelector("#chart").getContext("2d");
new Chart(chart, {
  type: "line",
  data: {
    labels: [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "des",
    ],
    datasets: [
      {
        label: "BTC",
        data: [
          2333, 2232, 1414, 2412, 1412, 1124, 2452, 2543, 2234, 2452, 2543,
        ],
        borderColor: "red",
        borderwidth: 2,
      },
      {
        label: "ETH",
        data: [
          2333, 2222, 2313, 1234, 1214, 2314, 2234, 1543, 1234, 2785, 2532,
        ],
        borderColor: "blue",
        borderwidth: 2,
      },
    ],
  },
  options: { resposive: true },
});

const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("aside");
const themeBtn = document.querySelector(".theme-btn");
menuBtn.addEventListener("click", () => {
  sidebar.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  sidebar.style.display = "none";
});
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeBtn.querySelector("span:first-child").classList.toggle("active");
  themeBtn.querySelector("span:last-child").classList.toggle("active");
});
