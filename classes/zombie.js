var LivingCreature = require("./class.js");

module.exports = class zombi extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
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
        return super.chooseCell(arr);
    }




    move() {
        var datarkvandak0 = this.chooseCell(0);
        var datarkvandak1 = this.chooseCell(1);
        var datarkvandak = datarkvandak0.concat(datarkvandak1)

        var hrr = Math.floor(Math.random() * (datarkvandak.length))
        var y = datarkvandak[hrr];

        if (y) {
            matrix[this.y][this.x] = this.naxkinvandakNum;
            var norx = y[0];
            var nory = y[1];
            matrix[nory][norx] = 4;
            this.x = norx;
            this.y = nory;
        }


    }



    eat() {
        var datarkvandak = this.chooseCell(3);
        var hrr = Math.floor(Math.random() * (datarkvandak.length))
        var d = datarkvandak[hrr];
        var datarkvandak = this.chooseCell(5);
        var grr = Math.floor(Math.random() * (datarkvandak.length))
        var f = datarkvandak[grr];
        if (d) {
            this.move();
        }
        else if (f) {
            var x = f[0];
            var y = f[1];

            if (matrix[y][x] == 3) {
                matrix[y][x] = 4;
                x = this.x;
                y = this.y;
                // console.log(wolfArr);
                for (var i in wolfArr) {
                    if (this.x == wolfArr[i].x && this.y == wolfArr[i].y) {
                        matrix[this.y][this.x] = 0;
                        var obj = {
                            name : 'xotaker',
                            inchic_e_mere : 'sovamah e exe'
                        }
                        arr_obj.push(obj);
                        wolfArr.splice(i, 1);

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
                var obj = {
                    name : 'zombi',
                    inchic_e_mere : 'sovamah e exe'
                }
                arr_obj.push(obj);
                zombiarr.splice(i, 1);
            }


        }
    }

}