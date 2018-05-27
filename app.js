var json_push_mlp = 0;
global.arr_obj = [];
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var gt = require('fs');
app.set("port", process.env.PORT || 3000);

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public/index.html");
});

server.listen(app.get("port"), function () {
    console.log("Example is running on port 3000");
});

var grass = require("./classes/grass.js");
var wolf = require("./classes/wolf.js");
var zombie = require("./classes/zombie.js");
var eatgrass = require("./classes/eatgrass.js");
var hunter = require("./classes/hunter.js");

grassArr = [];
grassutox = [];
wolfArr = [];
zombiarr = [];
huntarr = [];
var sizey = 40;
var size1 = 40;
jamanak = 0;
weather = "garun";

matrix = [];
for (var i = 0; i < sizey; i++) {
    matrix[i] = [];
    for (var j = 0; j < size1; j++) {
        matrix[i][j] = Math.floor(Math.random(6) * (6 - 1)) + 1;
    }
}


for (var y = 0; y < matrix.length; ++y) {
    for (var x = 0; x < matrix[y].length; ++x) {
        if (matrix[y][x] == 1) {
            var gr = new grass(x, y, 1);
            grassArr.push(gr);
        }
        else if (matrix[y][x] == 2) {
            var br = new eatgrass(x, y, 2);
            grassutox.push(br);
        }
        else if (matrix[y][x] == 3) {
            var gl = new wolf(x, y, 3);
            wolfArr.push(gl);
        }
        else if (matrix[y][x] == 4) {
            var sl = new zombie(x, y, 4);
            zombiarr.push(sl);
        }
        else if (matrix[y][x] == 5) {
            var vr = new hunter(x, y, 5);
            huntarr.push(vr);
        }
    }
}
io.on('connection', function (socket) {});

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


    jamanak++
    if (jamanak % 80 == 0) {
        weather = "garun";
    }
    else if (jamanak % 80 == 20) {
        weather = "amar";
    }
    else if (jamanak % 80 == 40) {
        weather = "ashun";
    }
    else if (jamanak % 80 == 60) {
        weather = "dzmer";
    }
    json_push_mlp++;
    console.log(json_push_mlp);
    if (json_push_mlp >= 5) {
    var file = 'die.json';
    for (var i in arr_obj) {
        gt.appendFileSync(file, JSON.stringify(arr_obj[i]) + '\n');
    }
    arr_obj = [];
}
    io.sockets.emit('matrix', matrix);
    io.sockets.emit('exanak', weather);
}, 1000);



