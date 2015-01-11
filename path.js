function getDirections(origin, destination) {

  var theUrl = 'http://maps.googleapis.com/maps/api/directions/json?origin=' + origin[0] + ',' + origin[1] +'&destination=' + destination[0] + ',' + destination[1] + ''

  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if(xmlHttp.readyState===4) {

      console.log(xmlHttp.responseText);
    }
  }
  xmlHttp.open( "GET", theUrl, true);
  xmlHttp.send( null );

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
