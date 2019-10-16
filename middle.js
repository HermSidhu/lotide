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

const assertArraysEqual = function(array1, array2) {
  const result = eqArrays(array1,array2);
  if (result) {
    console.log(`✅ ✅ ✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌ ❌ ❌  Assertion failed: ${array1} !== ${array2}`);
  }
};

const middle = function(array) {
  let midArray = [];
  const arrayMid = Math.trunc((array.length / 2));
  let isEven = Boolean;

  if (array.length <= 2) {
    return midArray = [];
  }

  if (array.length % 2) {
    isEven = true;
  } else {
    isEven = false;
  }
  
  if (!isEven) {
    midArray[0] = array[arrayMid - 1];
    midArray[1] = array[arrayMid];
  } else {
    midArray[0] = array[arrayMid];
  }

  return midArray;
};

assertArraysEqual(middle([1]), []) // => []
assertArraysEqual(middle([1, 2]), []) // => []
//For arrays with odd number of elements, an array containing a single middle element should be returned.
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]) // => [3, 4]