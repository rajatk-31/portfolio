var express = require('express')
var app = express()

app.use(express.static(__dirname + '/'))

app.use(function(req, res) {

    res.sendFile(__dirname + '/index.html')
})
app.listen(9000);
console.log("Server started")