var request = new XMLHttpRequest();

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
              var stopMarker = new google.maps.Marker({
                position: flowerpos,
                map: map,
                icon: "../images/blue-flower.png"
              });

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
    center: mypos,
    zoom: 15
  });

  var myMarker = new google.maps.Marker({
    position: mypos,
    map: map,
    icon: "../images/red-flower.png"
  });


}
