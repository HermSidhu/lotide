const eqArrays = function(array1, array2) {
  if (array1.length != array2.length) {
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] != array2[i] && (!Array.isArray(array1[i]) || !Array.isArray(array2[i]))) {
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
    console.log(`✅ ✅ ✅  Assertion passed: ${array1} == ${array2}`);
  } else {
    console.log(`❌ ❌ ❌  Assertion failed: ${array1} != ${array2}`);
  }
};

const without = function(source, itemsToRemove) {
  let answerArray = source.filter((element) => {
    if (itemsToRemove.includes(element)) {
      return false;
    } else {
      return true;
    }
  });
  return answerArray;
};

assertArraysEqual(without([1, 2, 3], [1]), [2,3]) // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), [1,2]) // => ["1", "2"]