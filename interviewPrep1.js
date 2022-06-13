// Pair Programming Practice Samson & Diana session --> Interview Prep

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example(Input => Output):
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

// Samson
// function reverser(num) {
//   let result = [];
//   // console.log(num);
//   for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
//     result.push(num[i]);
//   }
//   result = result.reverse();
//   return result;
// }
// let sample = 348597;
// console.log(reverser(sample)); // [7,9,5,8,4,3]

// notes ^^^

// Diana
// const reversedDigts = (numbers) => {
//   let resultArray = [];
//   // turn input number in to string
//   let numString = numbers.toString();
//   // split string of numbers in to array in reverse
//   let numStringArray = numString.split("").reverse();
//   // iterate through the split string variable
//   for (let i = 0; i < numStringArray.length; i++) {
//     let currentNumber = Number(numStringArray[i]);
//     resultArray.push(currentNumber);
//   }
//   // push the current item to output array as number
//   // return result array
//   return resultArray;
// };
// let inputReversed = 348597;
// // console.log(reversedDigts(inputReversed));

// Question 2

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// Samson

// function bestAverage(array, myScore) {
//   if (array.length === 0) {
//     return "Invalid Entry";
//   }

//   let sum = 0;
//   let scores = array.length;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   let average = sum / scores;
//   console.log(average);
//   if (average > myScore) {
//     return false;
//   } else {
//     return true;
//   }
// }

// let invalidArray = [];
// let invalidArray2 = ["anything", "hi"];
// let studentScores = [64, 91, 83, 89, 74, 79];
// let myScore = 80;
// console.log(bestAverage(studentScores, myScore));
// console.log(bestAverage(invalidArray, myScore));

// Question 3
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note:
// Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

// Diana
const nb_year = (p0, percent, aug, pop) => {
  let isInt = false;
  if (percent.isInterger() === true) {
    let percentToDec = percent / 100;
    isInt = true;
  }

  // p0 + p0 * percent + aug
  let totalInhabitants = (p0 + p0) * percentToDec + aug;
  // create count variable starting at 0
  return pop / totalInhabitants - percent;
};
console.log(nb_year(1500, 5, 100, 5000)); // expected 15)
console.log(nb_year(1500000, 2.5, 10000, 2000000)); // expected 10)
