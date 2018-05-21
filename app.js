var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
//

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public/index.html");
});

server.listen(3000, function () {
    console.log("Example is running on port 3000");
});

var grass = require("./classes/grass.js")
var wolf = require("./classes/wolf.js")
var zombie = require("./classes/zombie.js")
var eatgrass = require("./classes/eatgrass.js")
var hunter = require("./classes/hunter.js")



grassArr = [];
grassutox = [];
wolfArr = [];
zombiarr = [];
huntarr = [];
var sizey = 40;
var size1 = 40;
matrix = [];

for (var i = 0; i < sizey; i++) {
    matrix[i] = [];
    for (var j = 0; j < size1; j++) {
        matrix[i][j] = Math.floor(Math.random(6));
    }
}
// matrix = [
//     [0, 0, 0, 0, 0],
//     [1, 0, 0, 0, 0],
//     [0, 0, 1, 4, 0],
//     [0, 0, 0, 3, 0],
//     [1, 1, 0, 0, 0],
//     [1, 1, 0, 0, 0],
//     [1, 1, 0, 0, 0]
// ];


for (var y = 0; y < matrix.length; ++y) {
    for (var x = 0; x < matrix[y].length; ++x) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1);
            grassArr.push(gr);
        }
        else if (matrix[y][x] == 2) {
            var br = new GrassEater(x, y, 2);
            grassutox.push(br);
        }
        else if (matrix[y][x] == 3) {
            var gl = new wolf(x, y, 3);
            wolfArr.push(gl);
        }
        else if (matrix[y][x] == 4) {
            var gl = new zombi(x, y, 4);
            zombiarr.push(gl);
        }
        else if (matrix[y][x] == 5) {
            var vr = new hunter(x, y, 5);
            huntarr.push(vr);
        }
    }
}


//Samvelik
io.on('connection', function (socket) {

    //drav@
    setInterval(function () {
        for (var i in grassArr) {

            grassArr[i].mul();
        }
        for (var i in grassutox) {

            grassutox[i].eat();
        }
        for (var i in wolfArr) {

            wolfArr[i].eat();
        }
        for (var i in zombiarr) {

            zombiarr[i].eat();
        }
        for (var i in huntarr) {

            huntarr[i].eat();
        }

        io.sockets.emit('matrix', matrix);
    }, 2000);

});