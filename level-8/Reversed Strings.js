/* Complete the solution so that it reverses the string value passed into it.

solution('world'); // returns 'dlrow' */

function solution(str){
  return str.split("").reverse().join("")
}

console.log(solution("world"))
console.log(solution("Planet"))
console.log(solution("Jesus"))
console.log(solution("Forever"))
console.log(solution("Best Player"))

