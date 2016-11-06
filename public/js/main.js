/* JavaScript functions for Grow My Flower */

function myFunction() {
  document.getElementById("demo").innerHTML = "Here is a new paragraph #javascript #swag";
}

function getWeather(searchQuery) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?';
    var params = {
        APPID: apiKey, // generated open weather map
        units: 'imperial'
    };
    
    if (searchQuery) {
            params.q = searchQuery;
        } else {
            params.id = 4930956;
        }
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

function searchWeather() {
    var searchQuery = $('.search').val(); // grab value from search input
    getWeather(searchQuery);
}
