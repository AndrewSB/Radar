function getDirections(origin, destination) {
  var directionsService = new google.maps.DirectionsService();
  var request = {
    origin: origin[0]+","+origin[1],
    destination:destination[0]+","+destination[1],
    travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(result, status) {
    result
  });
}

function parseDirections(json) {
  var arr = []
  for (var i = 0; i < d["routes"][0]["legs"][0]["steps"].length; i++) {
    arr.push(d["routes"][0]["legs"][0]["steps"][i]["polyline"]["points"])
  }
  var str = ''
  for (var i = 0; i < arr.length; i++) {
    str += arr[i]
  }
  console.log(str)
}

var o = [37.77223,-122.413521]
var d = [37.769919,-122.415463]

getDirections(o,d)
