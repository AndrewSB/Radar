var position = [37.688613, -122.468703];
var map1;
var map2;


function initialize() {
  var latLng = new google.maps.LatLng(position[0], position[1]);
  var mapOptions1 = {
    zoom: 21, // initialize zoom level - the max value is 21
    streetViewControl: false, // hide the yellow Street View pegman
    scaleControl: false, // allow users to zoom the Google Map
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: latLng
  };

  var mapOptions2 = {
    zoom: 17, // initialize zoom level - the max value is 21
    streetViewControl: false, // hide the yellow Street View pegman
    scaleControl: true, // allow users to zoom the Google Map
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: latLng
  };

  map1 = new google.maps.Map(document.getElementById('fg-map'), mapOptions1);
  map2 = new google.maps.Map(document.getElementById('bg-map'), mapOptions2);

}

function move(lat, lon) {
  map1.setCenter(new google.maps.LatLng(lat, lon))
  map2.setCenter(new google.maps.LatLng(lat, lon))
}


google.maps.event.addDomListener(window, "load", initialize);
