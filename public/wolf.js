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