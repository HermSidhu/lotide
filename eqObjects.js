const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
 };

 const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] && (!Array.isArray(array1[i]) || !Array.isArray(array2[i]))) {
      return false;
    }
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    }
  }
  return true;
};

 const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (let element of Object.keys(object1)) {
    if (Array.isArray(object1[element])) {
      if (!eqArrays(object1[element],object2[element])) return false;
      continue;
    }
    if (typeof object1[element] === 'object' && !Array.isArray(object1[element])) {
      return eqObjects(object1[element], object2[element]);
    }
    if (object1[element] !== object2[element]) return false;
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual((eqObjects(ab, ba)), true); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

module.exports = eqObjects;