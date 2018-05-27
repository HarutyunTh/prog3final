var LivingCreature = require("./class.js");

module.exports = class hunter extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
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
        return super.chooseCell(arr);
    }
    move() {
        var datarkvandak0 = this.chooseCell(0);
        var datarkvandak1 = this.chooseCell(1);
        var datarkvandak = datarkvandak0.concat(datarkvandak1)

        var hrr = Math.floor(Math.random() * (datarkvandak.length))
        var u = datarkvandak[hrr];



        if (u) {

            var x = u[0];
            var y = u[1];



            matrix[this.y][this.x] = this.naxkinvandakNum;
            this.naxkinvandakNum = matrix[y][x];
            matrix[y][x] = 5;
            this.x = x;
            this.y = y;
        }
    }



    eat() {
        var datarkvandak = this.chooseCell(4);
        var hrr = Math.floor(Math.random() * (datarkvandak.length))
        var y = datarkvandak[hrr]

        if (y) {
            var x = y
            [0];
            var y = y[1];

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
            var obj = {
                    name : 'vorsord',
                    inchic_e_mere : 'heracel e'
                }
                arr_obj.push(obj);
        }
    }


}
