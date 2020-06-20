// Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	 "Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
//   * anything else* "Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer."

// Make sure you cover the cases where certain words do not show up with correct capitalization.For example, getDrinkByProfession("pOLitiCIaN") should still return "Your tax dollars".

function getDrinkByProfession(param){
  const profession = {
    "jabroni": "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    "programmer": "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    "politician": "Your tax dollars",
    "rapper": "Cristal" 
  };

  if(profession[param.toLowerCase()] === undefined) {
    return "Beer";
  }
  
  return profession[param.toLowerCase()];
}

console.log(getDrinkByProfession("jabrOni"));
console.log(getDrinkByProfession("scHOOl counselor"));
console.log(getDrinkByProfession("prOgramMer"));
console.log(getDrinkByProfession("bike ganG member"));
console.log(getDrinkByProfession("rapper"));
console.log(getDrinkByProfession("anything"));
