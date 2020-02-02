/* Convert number to reversed array of digits
Given a random number:

C#: long;
C++: unsigned long;
You have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
 */

function digitize(n) {
  return n.toString().split('').reverse().map(str => (parseInt(str)))
}

console.log(digitize(35231))
console.log(digitize(56165161651681861616))
console.log(digitize(664646891898))
console.log(digitize(6166151616156))
console.log(digitize(6151616156165))

