// const eqArrays = require('./eqArray');
// const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;