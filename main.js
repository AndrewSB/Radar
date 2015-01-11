var position = [37.68255383131444, -122.4607984408006];
var map1;
var map2;

var hardcodedMarkers = [
  {lat: 37.683983831312275, lng: -122.46078294080235, t: "gcar"},
  {lat: 37.68398883131419, lng: -122.4608210907976, t: "gcar"},
  {lat: 37.68407433131223, lng: -122.46080944080143, t: "person"},
  {lat: 37.68408983131219, lng: -122.46080944080143, t: "person"},
  {lat: 37.684003331312105, lng: -122.4608160408003, t: "person"},
  {lat: 37.68402533131205, lng: -122.46081799079963, t: "person"},
  {lat: 37.68406333131514, lng: -122.46081084079634, t: "person"},
  {lat: 37.684050831314245, lng: -122.46082609079872, t: "person"},
  {lat: 37.68404033131427, lng: -122.46082609079872, t: "person"},
  {lat: 37.68404033131427, lng: -122.46080999079845, t: "person"},
  {lat: 37.68410533131415, lng: -122.4607765407975, t: "blob1"},
  {lat: 37.684260331314185, lng: -122.4607872907967, t: "blob2"},
  {lat: 37.68427483131438, lng: -122.46081049080345, t: "tree"},
  {lat: 37.683028831313244, lng: -122.46079164079867, t: "gcar"},
  {lat: 37.68316183131291, lng: -122.46079164079867, t: "gcar"},
  {lat: 37.683218331312766, lng: -122.46079164079867, t: "gcar"},
  {lat: 37.683286331312964, lng: -122.46077959080219, t: "person"},
  {lat: 37.683306331313766, lng: -122.4608068407988, t: "tree"}


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
      url: './icons/' + hardcodedMarkers[i]['t'] + '.png',
      // This marker is 20 pixels wide by 32 pixels tall.
      // The origin for this image is 0,0.
      //size: new google.maps.Size(20, 32),

      //origin: new google.maps.Point(0,0),
      // The anchor for this image is the base of the flagpole at 0,32.
      //]anchor: new google.maps.Point(0, 0)
    };
    if(hardcodedMarkers[i]['t'] === 'person') {
      var marker2 = new google.maps.Marker({
        position: thisLatLng,
        map: map2,
        icon: image
      });
    }
    else {    
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
  var dem = .0095;
  var randomLat = chance.latitude({min:lat-dem, max: lat + dem});
  var randomLng = chance.longitude({min:lng-dem, max: lng+ dem});
  console.log(randomLat)
  console.log(randomLng)
  return new google.maps.LatLng(randomLat, randomLng);
}

function addRandomMarkers(type) {

  var mapLat = map1.getCenter().k;
  var mapLng = map1.getCenter().D;
  var thisLatLng = randomCloseLatLng(mapLat, mapLng);
  var image = {
    url: './icons/' + type + '.png',
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
google.maps.event.addDomListener(window, "load", function() {
  showHardcodedMarkers();
  for (var i = 0; i < 1000; i++) {
    addRandomMarkers('person');

  };
  for (var i = 0; i < 200; i++) {
    addRandomMarkers('gcar');
    addRandomMarkers('tree');

  };

});

function center(type) {
  return {'lat' : map2.getCenter()['k'], 'lng' : map2.getCenter()['D'], 't' : type };
}


