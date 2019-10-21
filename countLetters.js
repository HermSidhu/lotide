const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
 };

function countLetters(str) {
  let result = {};
  let noSpaces = str.split(' ').join("").toLowerCase()
  for (let char of noSpaces) {
  if (result[char]) {
    result[char] += 1;
  } else {
    result[char] = 1;
  }
} return result;
}

// console.log(countLetters("lighthouse Labs"));

const newResult = countLetters("Lighthouse Labs")

assertEqual(newResult["s"], 2);

module.exports = countLetters;