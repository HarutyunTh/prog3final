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