// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

/*function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: posX, lng: posY},
    zoom: 16
  });
  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}*/

function initialize() {
 
// Exibir mapa;
  var myLatlng = new google.maps.LatLng(posX, posY);
  var mapOptions = {
  zoom: 17,
  center: myLatlng,
  mapTypeId: google.maps.MapTypeId.ROADMAP
}


// Exibir o mapa na div #mapa;
  var map = new google.maps.Map(document.getElementById("maps"), mapOptions);
    var image = "http://www.google.com/mapfiles/marker.png";
    var marcadorPersonalizado = new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: image,
});
 
}


function setCoord(px, py){
    posX = px;
    posY = py;
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyDJ4TxmOK2qaUK2zN_-dtBUeSjy9OEg5uM&amp;signed_in=true&amp&callback=initialize";
    $("body").append(script);
    window.location = "#map";
}