var position = [37.68864, -122.468703];
var map1;
var map2;

function initialize() {
  console.log("initialized")
  var latLng = new google.maps.LatLng(position[0], position[1]);
  var mapOptions2 = {
    zoom: 21, // initialize zoom level - the max value is 21
    streetViewControl: false, // hide the yellow Street View pegman
    //scaleControl: false, // allow users to zoom the Google Map
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI:true,
    center: latLng,
    //draggable: false,
    zoomControl: false
  };

  var styleArray = [{"elementType": "labels.text","stylers": [{ "visibility": "off" }]},{"elementType": "labels.icon","stylers": [{ "visibility": "off" }]},{}]

  var mapOptions1 = {
    zoom: 18, // initialize zoom level - the max value is 21
    streetViewControl: false, // hide the yellow Street View pegman
    scaleControl: true, // allow users to zoom the Google Map
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI:true,
    center: latLng
  };

  map1 = new google.maps.Map(document.getElementById('fg-map'), mapOptions2);
  map2 = new google.maps.Map(document.getElementById('bg-map'), mapOptions1);
  map1.setOptions({styles: styleArray});
}

function move(lat, lon) {
  map1.setCenter(new google.maps.LatLng(lat, lon))
  map2.setCenter(new google.maps.LatLng(lat, lon))
}

function addMarker(lat, lon, map) {
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(lat, lon),
    map: map,
    icon: "./car.png"
  });
}


google.maps.event.addDomListener(window, "load", initialize);
