// group project map  

  var myLat = 0;
  var myLng = 0;
  var myloc = {
    lat: myLat,
    lng: myLng
  };


var mypos= new google.maps.LatLng(myLat, myLng);
function initMap() {
  navigator.geolocation.getCurrentPosition(function(position) {
           myLat= position.coords.latitude,
           myLng= position.coords.longitude,
          mypos= new google.maps.LatLng(myLat, myLng);

          startMap(mypos);

});

}

function startMap(position) {

   if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser 
       navigator.geolocation.getCurrentPosition(function(position) {
           myloc = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
       });
   } else {
       myloc = new google.maps.LatLng(0, 0);
   }

  console.log("Ming was here: render map");

  console.log(mypos.lat());
  var map = new google.maps.Map(document.getElementById('canvas_map'), {
    center: mypos,
    zoom: 15
  });

  var myMarker = new google.maps.Marker({
    position: mypos,
    map: map, 
    icon: "exquisite_llama.png"
  });
    console.log("HEY");


  var people_locs = [
   {"stop_name": "South Station", "stop_lat": 42.352271, "stop_lon": -71.05524200000001},
   {"stop_name": "Andrew", "stop_lat": 42.330154, "stop_lon": -71.057655},
   {"stop_name": "Porter Square", "stop_lat": 42.3884, "stop_lon": -71.11914899999999},
   {"stop_name": "Harvard Square", "stop_lat": 42.373362, "stop_lon": -71.118956},
   {"stop_name": "JFK/UMass", "stop_lat": 42.320685, "stop_lon": -71.052391},
   {"stop_name": "Savin Hill", "stop_lat": 42.31129, "stop_lon": -71.053331},
   {"stop_name": "Park Street", "stop_lat": 42.35639457, "stop_lon": -71.0624242},
   {"stop_name": "Broadway", "stop_lat": 42.342622, "stop_lon": -71.056967},
   {"stop_name": "North Quincy", "stop_lat": 42.275275, "stop_lon": -71.029583},
   {"stop_name": "Shawmut", "stop_lat": 42.29312583, "stop_lon": -71.06573796000001},
   {"stop_name": "Davis", "stop_lat": 42.39674, "stop_lon": -71.121815},
   {"stop_name": "Alewife", "stop_lat": 42.395428, "stop_lon": -71.142483},
   {"stop_name": "Kendall/MIT", "stop_lat": 42.36249079, "stop_lon": -71.08617653},
   {"stop_name": "Charles/MGH", "stop_lat": 42.361166, "stop_lon": -71.070628},
   {"stop_name": "Downtown Crossing", "stop_lat": 42.355518, "stop_lon": -71.060225},
   {"stop_name": "Quincy Center", "stop_lat": 42.251809, "stop_lon": -71.005409},
   {"stop_name": "Quincy Adams", "stop_lat": 42.233391, "stop_lon": -71.007153},
   {"stop_name": "Ashmont", "stop_lat": 42.284652, "stop_lon": -71.06448899999999},
   {"stop_name": "Wollaston", "stop_lat": 42.2665139, "stop_lon": -71.0203369},
   {"stop_name": "Fields Corner", "stop_lat": 42.300093, "stop_lon": -71.061667},
   {"stop_name": "Central Square", "stop_lat": 42.365486, "stop_lon": -71.103802},
   {"stop_name": "Braintree", "stop_lat": 42.2078543, "stop_lon": -71.0011385}];


   var polyline_dots = [
   {lat: 42.2078543, lng: -71.0011385},
   {lat: 42.233391, lng: -71.007153},
   {lat: 42.251809, lng: -71.005409},
   {lat: 42.2665139, lng: -71.0203369},
   {lat: 42.275275, lng: -71.029583},
   {lat: 42.284652, lng: -71.06448899999999},
   {lat: 42.29312583, lng: -71.06573796000001},
   {lat: 42.300093, lng: -71.061667},
   {lat: 42.31129, lng: -71.053331},
   {lat: 42.320685, lng: -71.052391},
   {lat: 42.330154, lng: -71.057655},
   {lat: 42.342622, lng: -71.056967},
   {lat: 42.352271, lng: -71.05524200000001},
   {lat: 42.355518, lng: -71.060225},
   {lat: 42.35639457, lng: -71.0624242},
   {lat: 42.361166, lng: -71.070628},
   {lat: 42.36249079, lng: -71.08617653},
   {lat: 42.365486, lng: -71.103802},
   {lat: 42.373362, lng: -71.118956},
   {lat: 42.3884, lng: -71.11914899999999},
   {lat: 42.395428, lng: -71.142483},
   {lat: 42.39674, lng: -71.121815},
   ];


  for (i = 1; i < 22; i++) { 
    var flowpos = {
      lat : people_locs[i].stop_lat,
      lng : people_locs[i].stop_lon,
    };

    var stopMarker = new google.maps.Marker({
      position: flowpos,
      map: map,
      icon: "flower.png"
    });
  }
  
}