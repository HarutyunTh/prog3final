var LivingCreature = require("./class.js");

module.exports = class wolf extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
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
        return super.chooseCell(a);
    }




    move() {
        var datarkvandak0 = this.chooseCell(0);
        var datarkvandak1 = this.chooseCell(1);
        var datarkvandak = datarkvandak0.concat(datarkvandak1)

        var hrr = Math.floor(Math.random() * (datarkvandak.length))
        var t = datarkvandak[hrr];



        if (t) {

            var x = t[0];
            var y = t[1];



            matrix[this.y][this.x] = this.naxkinvandakNum;
            this.naxkinvandakNum = matrix[y][x];
            matrix[y][x] = 3;
            this.x = x;
            this.y = y;
        }
    }



    eat() {
        var datarkvandak = this.chooseCell(2);
        var hrr = Math.floor(Math.random() * (datarkvandak.length));
        var c = datarkvandak[hrr];



        if (c) {
            this.energy++;
            matrix[this.y][this.x] = 0;
            var norx = c[0];
            var nory = c[1];
            matrix[nory][norx] = 3;
            this.x = norx;
            this.y = nory;
            for (var i in grassutox) {//////---------
                if (norx == grassutox[i].x && nory == grassutox[i].y) {
                    var obj = {
                        name : 'xotaker',
                        inchic_e_mere : 'kerel e gishatichy'
                    }
                    arr_obj.push(obj);
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
                    var obj = {
                        name : 'gishatich',
                        inchic_e_mere : 'sovamah e exe'
                    }
                    arr_obj.push(obj);
                wolfArr.splice(i, 1);
            }


        }
    }



}