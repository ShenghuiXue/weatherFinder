const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./build'));

app.get('/', function (req, res) {
  res.sendFile(__dirname +'/build/index.html');
});

app.get('/test', function(req, res) {
	res.send("you hit the testing route");
}) 

app.get('/*', function(req, res) {
	res.sendFile(__dirname +'/build/index.html');
}) 

//app.listen(9000);
app.listen (process.env.PORT, process.env.IP, function () {
    console.log("server started!")
});