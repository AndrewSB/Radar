var position = [37.688613, -122.468703];
var map1 = "";
var map2 = "";

function loadBgMap() {
  var latLng = new google.maps.LatLng(position[0], position[1]);

  var mapOptions = {
    zoom: 16, // initialize zoom level - the max value is 21
    streetViewControl: false, // hide the yellow Street View pegman
    scaleControl: true, // allow users to zoom the Google Map
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: latLng
  };

  var map1 = new google.maps.Map(document.getElementById('bg-map'), mapOptions);
  return map1;
}

function loadFgMap() {
    var latLng = new google.maps.LatLng(position[0], position[1]);

    var mapOptions = {
      zoom: 21, // initialize zoom level - the max value is 21
      streetViewControl: false, // hide the yellow Street View pegman
      scaleControl: false, // allow users to zoom the Google Map
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: latLng
    };

    map2 = new google.maps.Map(document.getElementById('fg-map'), mapOptions);
    return map2;
}

document.onload = function() {
  map1 = loadBgMap();
  map2 = loadFgMap();
}

google.maps.event.addDomListener(window, 'load', loadBgMap);
google.maps.event.addDomListener(window, 'load', loadFgMap);
//
// console.log(map1);
// console.log(map2);
