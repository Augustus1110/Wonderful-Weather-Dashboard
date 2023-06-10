
var userInput = document.getElementById("user_input");
var submitButton = document.getElementById("submit_button");
var currentWeather = document.getElementById("current_weather");
var city = document.getElementById("city");
var date = document.getElementById("date");
var temperature = document.getElementById("temperature");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");
var fiveDayForecast = document.getElementById("five_day_forecast");
var fiveDayWeather = document.getElementById("five_day_weather");
var fiveDayContainer = document.getElementById("five_day_container");


//Event listener for the submit button, when the user clicks the Submit button, the getCurrentCoordinates function will run
submitButton.addEventListener("click", function () {
  getCurrentCoordinates(userInput.value);
});

//This is my unique current weather API key
//b12be20cab068cdc779326a35a3ed4c2

//This is the current weather geocoding API call
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

//This is the current weather latitude and longitude API call
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}//


//I have to write a function that will get the coordinates of the city that the user inputs
function getCurrentCoordinates(city) {
  var url = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=b12be20cab068cdc779326a35a3ed4c2";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var lat = data[0].lat;
      var lon = data[0].lon;
      getCurrentWeather(lat, lon);
      getFiveDayForecast(lat, lon);
    });
}

//I have to write a function that will get the current weather based on the coordinates
function getCurrentWeather(lat, lon) {
  var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=b12be20cab068cdc779326a35a3ed4c2&units=imperial";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      showCurrentWeather(data);
    });
}

//I have to write a function will display the current weather
var showCurrentWeather = function (data) {
  city.textContent = data.name;
  date.textContent = dayjs.unix(data.dt).format("MM/DD/YYYY");
  temperature.textContent = "Temperature: " + data.main.temp + " °F";
  wind.textContent = "Wind: " + data.wind.speed + " mph";
  humidity.textContent = "Humidity: " + data.main.humidity + "%";
};

console.log(showCurrentWeather);

//5-Day Geocoding API call
//api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

//5-Day Personal Key
//b12be20cab068cdc779326a35a3ed4c2

// function to get coordinates using the 5-Day API call
function fiveDayCoordinates(city) {
  var url = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=b12be20cab068cdc779326a35a3ed4c2";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        var lat = data[0].lat;
        var lon = data[0].lon;
        getCurrentWeather(lat, lon);
        getFiveDayForecast(lat, lon);
      });
}

//5-Day Lat Long API call
//https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

//I have to write a function that will get the 5 day forecast based on the coordinates

function getFiveDayForecast(lat, lon) {
  var url = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=b12be20cab068cdc779326a35a3ed4c2&units=imperial";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      showFiveDayForecast(data);
    })
}

//I have to write a function that will display the 5 day forecast
var showFiveDayForecast = function (data) {
  fiveDayContainer.innerHTML = "";
  for (let i = 0; i < data.list.length; i++) {
    var fiveDayPeriod = document.createElement("section");
    fiveDayPeriod.innerHTML = `
        <h2>${dayjs.unix(data.list[i].dt).format("MM/DD/YYYY")}</h2>
        <p>Temperature: ${data.list[i].main.temp} °F</p>
        <p>Wind: ${data.list[i].wind.speed} MPH</p>
        <p>Humidity: ${data.list[i].main.humidity}%</p>
    `;
    fiveDayContainer.appendChild(fiveDayPeriod);
  }
};

