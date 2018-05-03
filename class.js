class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));

        if (this.multiply >= 8 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }



}
class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.directions = [];

    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        var emptyCord = this.chooseCell(0);//
        var cord = random(emptyCord);
        if (cord) {
            var x = cord[0];
            var y = cord[1];
            var eater = new GrassEater(x, y, this.index);
            grassutox.push(eater);

            matrix[y][x] = 2;
            this.multiply = 0;
        }
    }

    die() {
        for (var i in grassutox) {
            if (this.x == grassutox[i].x && this.y == grassutox[i].y) {
                matrix[this.y][this.x] = 0;
                grassutox.splice(i, 1);

                break;
            }

        }
    }
    move() {
        var datarkvandak = this.chooseCell(0);
        var norvandak = random(datarkvandak);
        if (norvandak) {
            this.energy--;
            matrix[this.y][this.x] = 0;
            var norx = norvandak[0];
            var nory = norvandak[1];
            matrix[nory][norx] = 2;
            this.x = norx;
            this.y = nory;
            if (this.energy <= 0) {
                this.die();

            }
        }
    }
    eat() {
        var datarkvandak = this.chooseCell(1);
        var norvandak = random(datarkvandak);
        if (norvandak) {
            this.energy++;
            matrix[this.y][this.x] = 0;
            var norx = norvandak[0];
            var nory = norvandak[1];
            matrix[nory][norx] = 2;
            this.x = norx;
            this.y = nory;
            if (this.energy > 12) {

                this.mul();

            }
            for (var i in grassArr) {
                if (norx == grassArr[i].x && nory == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

        }
        else {
            this.move();
        }


    }


}
class Wolf {
    constructor(x, y, index) {
        this.index = index;
        this.x = x;
        this.y = y;
        this.naxkinvandakNum = 0;
        this.multiply = 0;
        this.merneluvaxt = 0;
        this.die2 = 0;

    }

    newDirections() {




        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    chooseCell(a) {
        this.newDirections();
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == a) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }




    move() {
        var datarkvandak0 = this.chooseCell(0);
        var datarkvandak1 = this.chooseCell(1);
        var emptyCord = datarkvandak1.concat(datarkvandak0);


        var cord = random(emptyCord);


        if (cord) {

            var x = cord[0];
            var y = cord[1];



            matrix[this.y][this.x] = this.naxkinvandakNum;
            this.naxkinvandakNum = matrix[y][x];
            matrix[y][x] = 3;
            this.x = x;
            this.y = y;
        }
    }



    eat() {
        var datarkvandak = this.chooseCell(2);

        var norvandak = random(datarkvandak);


        if (norvandak) {
            this.energy++;
            matrix[this.y][this.x] = 0;
            var norx = norvandak[0];
            var nory = norvandak[1];
            matrix[nory][norx] = 3;
            this.x = norx;
            this.y = nory;
            for (var i in grassutox) {//////---------
                if (norx == grassutox[i].x && nory == grassutox[i].y) {
                    grassutox.splice(i, 1);
                    break;
                }
            }

        }
        else {
            this.move();
            this.merneluvaxt++;
            if (this.merneluvaxt == 30) {
                this.die();
            }
        }




    }
    die() {

        matrix[this.y][this.x] = 0;
        for (var i in wolfArr) {
            if (this.x == wolfArr[i].x && this.y == wolfArr[i].y) {
                wolfArr.splice(i, 1);
            }


        }
    }



}
class zombi {
    constructor(x, y, index) {
        this.index = index;
        this.x = x;
        this.y = y;
        this.naxkinvandakNum = 0;
        this.multiply = 0;
        this.merneluvaxt = 0;

    }

    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    chooseCell(arr) {
        this.newDirections();
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == arr) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }




    move() {
        var datarkvandak0 = this.chooseCell(0);
        var cord = random(datarkvandak0);

        if (cord) {
            matrix[this.y][this.x] = this.naxkinvandakNum;
            var norx = cord[0];
            var nory = cord[1];
            matrix[nory][norx] = 4;
            this.x = norx;
            this.y = nory;
        }


    }



    eat() {
        var emptyCord = this.chooseCell(3);
        var emptyCord1 = this.chooseCell(5);
        var cord = random(emptyCord);
        var cord1 = random(emptyCord1);
        if (cord1) {
            this.move();
        }
        else if (cord) {
            var x = cord[0];
            var y = cord[1];

            if (matrix[y][x] == 3) {
                matrix[y][x] = 4;
                x = this.x;
                y = this.y;
                // console.log(wolfArr);
                for (var i in wolfArr) {
                    if (this.x == wolfArr[i].x && this.y == wolfArr[i].y) {
                        matrix[this.y][this.x] = 0;
                        wolfArr.splice(i, 1);
                        console.log("fffsfs")
                    }


                }



                var zombi1 = new zombi(x, y, this.index);
                zombiarr.push(zombi1);

            }





        }
        else {
            this.move();
            this.merneluvaxt++;
            if (this.merneluvaxt == 20) {
                this.die();
            }
        }



    }

    die() {

        matrix[this.y][this.x] = 0;
        for (var i in zombiarr) {
            if (this.x == zombiarr[i].x && this.y == zombiarr[i].y) {
                zombiarr.splice(i, 1);
            }


        }
    }

}
class hunter {
    constructor(x, y, index) {
        this.index = index;
        this.x = x;
        this.y = y;
        this.naxkinvandakNum = 0;
        this.multiply = 0;
        this.die2 = 0;

    }

    newDirections() {




        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    chooseCell(arr) {
        this.newDirections();
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == arr) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move() {
        var datarkvandak0 = this.chooseCell(0);
        var datarkvandak1 = this.chooseCell(1);

        var emptyCord = datarkvandak1.concat(datarkvandak0);


        var cord = random(emptyCord);


        if (cord) {

            var x = cord[0];
            var y = cord[1];



            matrix[this.y][this.x] = this.naxkinvandakNum;
            this.naxkinvandakNum = matrix[y][x];
            matrix[y][x] = 5;
            this.x = x;
            this.y = y;
        }
    }



    eat() {
        var emptyCord = this.chooseCell(4);

        var cord = random(emptyCord);


        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 5;

            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            for (var i in zombiarr) {
                if (x == zombiarr[i].x && y == zombiarr[i].y) {
                    zombiarr.splice(i, 1);
                    this.multiply++;


                    for (var i = 0; i < matrix.length; i++) {
                        for (var j = 0; j < matrix[i].length; j++) {
                            if (matrix[j][i] == 2) {
                                this.var++;
                            }


                        }

                    }
                }

            }
        } else {
            this.move();
            this.die2++;
            if (this.die2 == 20) {
                this.die();
            }
        }



    }
    die() {

        matrix[this.y][this.x] = 0;
        for (var i in huntarr) {
            if (this.x == huntarr[i].x && this.y == huntarr[i].y) {
                huntarr.splice(i, 1);
            }


        }
    }


}
