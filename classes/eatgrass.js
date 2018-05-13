class GrassEater extends LivingCreature {
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
  chooseCell(ch) {
   this.getNewCoordinates();
   return super.chooseCell(ch);
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

