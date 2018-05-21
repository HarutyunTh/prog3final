var  LivingCreature = require("./class.js");

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