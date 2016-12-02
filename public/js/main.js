/* JavaScript functions for Grow My Flower */

// var cityID = "4930956";
// var client_id = '97811cc37e214cb2a6b7a3ead3cb0f9c'; 

// var client_secret = clientSecret; 
// var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri

var myLocation = 'Boston';

function init(){
    getWeather(myLocation);
}

function getWeather(searchQuery) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?';
    var params = {
        APPID: apiKey,
        units: 'imperial'
    };
    
    if (searchQuery) {
            params.q = searchQuery;
        } else {
            params.id = 4930956;
        }

    $.ajax(url + $.param(params), {
        success: function (data) {
            $('#weather').text(data.weather[0].main);
            weatherCSS(data.weather[0].main);
        }, error: function (error) {
            $('.error-message').text('An error occurred!');
        }
    });
}

function weatherCSS(weatherType) {
    if (weatherType === 'Clear') {
        document.body.style.backgroundImage = "url('/images/sunny-day.jpeg')";   
    } else if (weatherType === 'Clouds') {
        document.body.style.backgroundImage = "url('/images/cloudy-day.jpg')"; 
    } else if (weatherType === 'Rain') {
        document.body.style.backgroundImage = "url('/images/rainy-day.jpg')"; 
    } else if (weatherType === 'Snow') {
        document.body.style.backgroundImage = "url('/images/snowy-day.jpg')";  
    } 
}
