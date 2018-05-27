var LivingCreature = require("./class.js");

module.exports = class Grass extends LivingCreature {


    mul() {
        var datarkvandak = this.chooseCell(0);
        this.multiply++;
        var index = Math.floor(Math.random()*(datarkvandak.length));

        var newCell = datarkvandak[index];
////////////
        if (this.multiply >= 20 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.multiply = 0;
        }
    }
}
