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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  const result = eqObjects(actual, expected);
  if (result) {
    console.log(`✅ ✅ ✅  Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ ❌ ❌  Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

