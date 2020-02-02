/* Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
 */

function howMuchILoveYou(nbPetals) {
  let numberPhase = 0;
  let phase = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];

  while (nbPetals > 0) {
    if (numberPhase === 6) {
      numberPhase = 1;
      nbPetals--;
    } else {
      numberPhase++;
      nbPetals--;
    }
  }

  return phase[numberPhase - 1]
}


console.log(howMuchILoveYou(1))
console.log(howMuchILoveYou(2))
console.log(howMuchILoveYou(3))
console.log(howMuchILoveYou(4))
console.log(howMuchILoveYou(5))
console.log(howMuchILoveYou(6))
console.log(howMuchILoveYou(7))
console.log(howMuchILoveYou(2346))
console.log(howMuchILoveYou(23))