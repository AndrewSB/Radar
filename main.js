var position = [37.68864, -122.468703];
var map1;
var map2;

var hardcodedMarkers = [
  {'lat' : 37.68907099999915,
   'lng' : -122.46868930000471},
  {'lat' : 37.68950519999958, 
   'lng' :-122.46871624999545}

];

function initialize() {
  var latLng = new google.maps.LatLng(position[0], position[1]);
  var mapOptions2 = {
    zoom: 21, // initialize zoom level - the max value is 21
    streetViewControl: false, // hide the yellow Street View pegman
    scaleControl: false, // allow users to zoom the Google Map
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI:true,
    center: latLng,
    draggable: false,
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

  
  map1 = new google.maps.Map(document.getElementById('bg-map'), mapOptions1);
  map2 = new google.maps.Map(document.getElementById('fg-map'), mapOptions2);
  map2.setOptions({styles: styleArray});
}

function move(lat, lon) {
  map1.setCenter(new google.maps.LatLng(lat, lon))
  map2.setCenter(new google.maps.LatLng(lat, lon))
}
function showHardcodedMarkers() {
  for(var i = 0; i < hardcodedMarkers.length; i++) {
    var thisLatLng = new google.maps.LatLng(hardcodedMarkers[i]['lat'], hardcodedMarkers[i]['lng']);
    var image = {
      url: './icons/caroutline_thumb.png',
      // This marker is 20 pixels wide by 32 pixels tall.
      // The origin for this image is 0,0.
      //size: new google.maps.Size(20, 32),

      //origin: new google.maps.Point(0,0),
      // The anchor for this image is the base of the flagpole at 0,32.
      //]anchor: new google.maps.Point(0, 0)
    };
    var marker1 = new google.maps.Marker({
      position: thisLatLng,
      map: map1,
      icon: image
    }); 
     var marker2 = new google.maps.Marker({
      position: thisLatLng,
      map: map2,
      icon: image
    });
  }
}

function addMarker(lat, lon, map) {
  var image = {
    url: './icons/caroutline_thumb.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    // The origin for this image is 0,0.
    //size: new google.maps.Size(20, 32),

    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(0, 0)
  };
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(lat, lon),
    map: map,
    icon: image
  });  
}
function randomCloseLatLng(lat, lng) {
  var dem = .0009;
  var randomLat = chance.latitude({min:lat-dem, max: lat + dem});
  var randomLng = chance.longitude({min:lng-dem, max: lng+ dem});
  console.log(randomLat)
  console.log(randomLng)
  return new google.maps.LatLng(randomLat, randomLng);
}

function addRandomMarkers() {

  var mapLat = map1.getCenter().k;
  var mapLng = map1.getCenter().D;
  var thisLatLng = randomCloseLatLng(mapLat, mapLng);
  var image = {
    url: './icons/caroutline_thumb.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    // The origin for this image is 0,0.
    //size: new google.maps.Size(20, 32),

    //origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    //]anchor: new google.maps.Point(0, 0)
  };
  var marker1 = new google.maps.Marker({
    position: thisLatLng,
    map: map1,
    icon: image
  }); 
   var marker2 = new google.maps.Marker({
    position: thisLatLng,
    map: map2,
    icon: image
  });
}


function addPolyline(coordinates, map) {
  var flightPath = new google.maps.Polyline({
    path: coordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath.setMap(map);
}

google.maps.event.addDomListener(window, "load", initialize);
showHardcodedMarkers()


