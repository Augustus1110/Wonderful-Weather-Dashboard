//This is my unique API key
// b12be20cab068cdc779326a35a3ed4c2

    var userInput = document.getElementById("user_input");
    var submitButton = document.getElementById("submit_button");
    var currentWeather= document.getElementById("current_weather");
    var city = document.getElementById("city");
    var date = document.getElementById("date");
    var temp =document.getElementById("temp");
    var wind = document.getElementById("wind");
    var humidity = document.getElementById("humidity");
    var fiveDayForecast = document.getElementById("five_day_forecast"); 


    //this is the event listener for the submit button
    submitButton.addEventListener("click", function(event) {});



    //I have to write a function that will get the coordinates of the city that the user inputs
    function getCoordinates (city){
        var url = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=b12be20cab068cdc779326a35a3ed4c2";
        fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data);
            var lat = data[0].lat;
            var lon = data[0].lon;
            getCurrentWeather(lat, lon);
        })  
    };

    //I have to write a function that will get the current weather based on the coordinates
    function getCurrentWeather (lat, lon) {
        var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=b12be20cab068cdc779326a35a3ed4c2&units=imperial";
        fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
    })
   };

  
 //I have to write a function will display the current weather
 function displayCurrentWeather (currentWeather, searchTerm) {
    if currentWeather.city) {
        currentWeather
    }
 }

   
//this is the geocoding API call
 // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key} 
  
//this is latitude and longitude API call
 //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}



