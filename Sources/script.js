     var datetime = new Date().toLocaleTimeString();
console.log(datetime);
document.getElementById("time").innerHTML = datetime;

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const d = new Date();
let day = days[d.getDay()];
document.getElementById("date").innerHTML = day;

/////////////////////////////////////////////////////////////////////////
function temperature(response) {
  console.log(response.data);
  let cityElement = document.querySelector("#cityname");
  cityElement.innerHTML = response.data.name;
  let temp = Math.round(response.data.main.temp);
  let tempelement = document.querySelector("#citytemp");
  tempelement.innerHTML = `${temp}°C`;
}

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#site-search").value;
  searchCity(cityInput);
}

function searchCity(city) {
  let apiKey = "0a521eaf234a3a56f45252fac3c737ad";
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(`${url}&appid=${apiKey}`).then(temperature);
}

let searchForm = document.querySelector("#searchform");
searchForm.addEventListener("submit", search);