function getDirections(origin, destination) {
  var directionsService = new google.maps.DirectionsService();
  var request = {
    origin: origin[0]+","+origin[1],
    destination:destination[0]+","+destination[1],
    travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(result, status) {
    addPolyline(result['overview_polyline'], map1);
    addPolyline(result['overview_polyline'], map2);
  });
}

function parseDirections(json) {
  var arr = []
  for (var i = 0; i < json["routes"][0]["legs"][0]["steps"].length; i++) {
    arr.push(json["routes"][0]["legs"][0]["steps"][i]["polyline"]["points"])
  }
  var str = ''
  for (var i = 0; i < arr.length; i++) {
    str += arr[i]
  }
  console.log(str)
}

var o = [37.68883102943947,-122.4683784527092]
var d = [37.769919,-121.415483]

getDirections(o,d)
