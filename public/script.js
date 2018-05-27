var side = 15;
var side1 = 15;
var sizex = 60;
var sizey = 60;
var col = "#acacac";
var socket = io.connect('http://localhost:3000');

//--------------------------
socket.on("matrix", gcel);
//-----------------------
socket.on("exanak", function (weather) {
    if (weather == "garun") {
        col = '#9fdfbf';
    }
    else if (weather == "dzmer") {
        col = '#ffffff';
    }
    else if (weather == "amar") {
        col = '#4dffc3';
    }
    else if (weather == "ashun") {
        col = '#ffb366';
    }
});

function setup() {
    createCanvas(sizex * side, sizey * side);
}



function gcel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side1, y * side1, side1, side1);
            }
            else if (matrix[y][x] == 0) {
                fill(col);
                rect(x * side1, y * side1, side1, side1);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side1, y * side1, side1, side1);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side1, y * side1, side1, side1);
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
                rect(x * side1, y * side1, side1, side1);
            }
            else if (matrix[y][x] == 5) {
                fill("orange");
                rect(x * side1, y * side1, side1, side1);
            }
        }
    }

}