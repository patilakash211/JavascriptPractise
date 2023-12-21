let score = "33";

console.log(typeof score);//String

let valueInNumber = Number(score);

console.log(typeof valueInNumber);//Number

// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0


console.log(null > 0);//false   
console.log(null == 0);//false
console.log(null >= 0);//true

// here equality check and comparisons work differently Comparisons convert null to number treating it as 0
// 