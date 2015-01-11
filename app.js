var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

/* serves main page */
app.get("/", function(req, res) {
	res.sendfile('index.html')
});


/* serves all the static files */
app.get(/^(.+)$/, function(req, res){ 
 console.log('static file request : ' + req.params);
 res.sendfile( __dirname + req.params[0]); 
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
console.log("Listening on " + port);
});