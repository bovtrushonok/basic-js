module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

   this.turns = Math.pow(2, disksNumber) - 1;
   this.seconds = turns / (turnsSpeed / 3600);

   return {turns: this.turns, seconds: this.seconds,};
}