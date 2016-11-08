/* JavaScript functions for Grow My Flower */

var myLat = 42.352;
var myLon = -71.057;

function myFunction() {
  document.getElementById("demo").innerHTML = "Here is a new paragraph #javascript #swag";
}

function getLocation(){
    if (navigator.geolocation) { 
        navigator.geolocation.getCurrentPosition(function(position) {
            myLat = position.coords.latitude;
            myLon = position.coords.longitude;
            getWeather();
        });
    }
    else {
        alert("Please enable geolocation on this browser");
    }
}


function getWeather() {
    var url = 'api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}';
    var params = {
        lat: myLat,
        lon: myLon,
        APPID: apiKey, // generated open weather map
        units: 'imperial'
    };
    
    $.ajax(url + $.param(params), {
      success: function (data) {
        $('.city').text(data.name);
        $('.temp').text(data.main.temp + ' °F');
        $('.precipitation').text();
        $('.wind-speeds').text();
      }, error: function (error) {
        $('.error-message').text('An error occurred!');
      }
    });
}

