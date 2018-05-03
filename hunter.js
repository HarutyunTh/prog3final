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
