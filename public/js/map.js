var request = new XMLHttpRequest();
var infowindow = new google.maps.InfoWindow();
var markers = [];


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

     request = new XMLHttpRequest();
     request.open("get", "http://localhost:5000/locations", true);
     request.onreadystatechange = function() {
       if (request.status == 200 && request.readyState ==4) {

         data = request.responseText;
         locations = JSON.parse(data);
         console.log(locations);
         for (i =0; i < locations.length; i++) {

              var flowerpos = {
                     //change to user[i].lat
               lat : locations[i]["lat"],
                     //change to user[i].lon
               lng : locations[i]["lng"],
              };
              var name = locations[i]["name"];

              var Marker = new google.maps.Marker({
                position: flowerpos,
                map: map,
                icon: "../images/blue-flower.png",
                title: name
              });

              markers += Marker;

         }

        }
      };
      request.send();



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
    center: {lat: 42.407748, lng: -71.120276},
    zoom: 16
  });



//marker for my curent location -> change to database query
  /*var myMarker = new google.maps.Marker({
    position: mypos,
    map: map,
    icon: "../images/red-flower.png"
  });
*/

}
