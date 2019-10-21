# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hermsidhu/lotide`

**Require it:**

`const _ = require('@hermsidhu/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: compares both arrays to check if they equate to each other.
* `assertEqual(actual, expected)`: two primative values are compares to check if they equate to each other.
* `assertObjectsEqual(actual, expected)`: compares two objects to check if they equate to each other.
* `countLetters(str)`: returns object with count of each letter in string.
* `countOnly(allItems, itemsToCount)`: return object of count of elements within array.
* `eqArrays(array1, array2)`: compares two arrays and returns true if they equate to each other.
* `eqObjects(object1, object2)`: compares two objects and returns true if they equate to each other.
* `findKeys(object, callback)`: takes an object and a callback and returns the first truthy value.
* `findKeyByValue(inputObject, value)`: returns key of value of object.
* `flatten(inputArray)`: returns a single array if there are arrays of arrays.
* `head(array)`: returns the first element of an array.
* `letterPositions(sentence)`: takes string and returns object with indices of elements (letters).
* `map(array, callback)`: returns array with elements of original array which go through callback function.
* `middle(array)`: returns middle value of array.
* `tail(array)`: returns all elements of array after the first element.
* `takeUntil(array, callback)`: returns array of elements until the specified callback.
* `without(source, itemsToRemove)`: returns array without the element specified.