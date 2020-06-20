// A binary gap within a positive number num is any sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of num.
// For example:
// 9 has binary representation 1001 and contains a binary gap of length 2.
// 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
// 20 has binary representation 10100 and contains one binary gap of length 1.
// 15 has binary representation 1111 and has 0 binary gaps.
// Write function gap(num) that,  given a positive num,  returns the length of its longest binary gap.
// The function should return 0 if num doesn't contain a binary gap.
function gap(num) {
  const newNumber = num.toString(2);
  const array = newNumber.split('');
  let result = '';
  let current = '';
  for(let i = 0; i<array.length; i++) {
    if(array[i] === "1") {
      if(result.length < current.length) {
        result = current;
      }
      current = '';
    }
    
    if(array[i] === "0") {
      current += array[i]
    }
  }
  return result.length;
};

console.log(gap(9));
console.log(gap(529));
console.log(gap(20));
console.log(gap(15));



