function initMap() {
        //TODO
        //change to current user's location as stored in mySQL databse
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

  var map = new google.maps.Map(document.getElementById('canvas_map'), {
    center: mypos,
    zoom: 15
  });

  var myMarker = new google.maps.Marker({
    position: mypos,
    map: map,
    icon: "../images/red-flower.png"
  });

  var people_locs = [
   {"lat": 42.352271, "lon": -71.05524200000001},
   {"lat": 42.330154, "lon": -71.057655},
   {"lat": 42.3884, "lon": -71.11914899999999},
   {"lat": 42.373362, "lon": -71.118956},
   {"lat": 42.320685, "lon": -71.052391},
   {"lat": 42.31129, "lon": -71.053331},
   {"lat": 42.35639457, "lon": -71.0624242},
   {"lat": 42.342622, "lon": -71.056967},
   {"lat": 42.275275, "lon": -71.029583},
   {"lat": 42.29312583, "lon": -71.06573796000001},
   {"lat": 42.39674, "lon": -71.121815}];

   var num_users = people_locs.length; //change to num users in DB

  for (i = 1; i < num_users; i++) {
    var flowpos = {
            //TODO
            //change to user[i].lat
      lat : people_locs[i].lat,
            //change to user[i].lon
      lng : people_locs[i].lon,
    };

    var stopMarker = new google.maps.Marker({
      position: flowpos,
      map: map,
      icon: "../images/blue-flower.png"
    });
  }

}
