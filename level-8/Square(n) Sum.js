/* Complete the square sum function so that it squares each number passed into it 
and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
 */

function squareSum(numbers){
  return numbers.map(number => {
    return number*number;
  }).reduce((acc, current) => (acc + current), 0)
};


console.log(squareSum([1,2]));;
console.log(squareSum([1,3, ,10, 2]));;
console.log(squareSum([0, 5, 127]));
