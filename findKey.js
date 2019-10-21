const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
 };

const findKey = function(object, callback) {
   let objKey = Object.keys(object);
   for (let i in objKey) {
     if (callback(object[objKey[i]])) {
       return objKey[i];
     }
   }
   return undefined;
 };

 let findKeyData = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

let actual1 = findKey(findKeyData, x => x.stars === 2);
let expected1 = "noma";
assertEqual(actual1, expected1);

module.exports = findKey;