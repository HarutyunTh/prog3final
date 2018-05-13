var side = 20;
var side1 = 20;
var grassArr = [];
var grassutox = [];
var wolfArr = []; 
var zombiarr = [];
var huntarr = [];
function setup() {

    frameRate(6);
    var sizey = 40;
    var size1 = 40;
    matrix = [];


    for (var i = 0; i < sizey; i++) {
        matrix[i] = [];
        for (var j = 0; j < size1; j++) {
            matrix[i][j] = Math.floor(random(6));
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

    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


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

}

function draw() {
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
}