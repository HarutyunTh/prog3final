var side =15;
var sizex = 20;
var sizey = 20;
var size1 = 20;
var socket = io.connect('http://localhost:3000');//Samvelik
socket.on("matrix",gcel);
function setup() {
    createCanvas(sizex * side, sizey * side);
    background('#acacac');
}



function gcel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side1, y * side1, side1, side1);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
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