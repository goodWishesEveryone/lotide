# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @stellamaris/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`               : retrieves the first element from the array
* `tail(...)`               : retrieves the last element from the array
* `middle(...)`             : retrieves the middle element from the array
* `assertArraysEqual(...)`  : take in two arrays and console.log an appropriate message to the console
* `assertEqual(...)`        : compares two values it takes in and print out a message if they match or not
* `countLetters (...)`      : takes in a string and returns an object where each unique character encountered in the string is a property of the object and the value for that property/key should be the number of occurrences for that character
* `countOnly(...)`          : take in a collection of items and return counts for a specific subset of those items
* `eqArrays(...)`           : takes in two arrays and returns true or false, based on a perfect match
* `letterPositions(...)`    : will return all the indices (zero-based positions) in the string where each character is found
* `map(...)`                : will take in two arguments: an array to map and a callback function; and will return a new array based on the results of the callback function.
* `without(...)`            : will return a subset of a given array, removing unwanted elements
* `findKeyByValue (...)`    : takes in an object and a value. It should scan the object and return the first key which contains the given value

* `findKey(...)`            : will take in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value
* `takeUntil(...)`          : will keep collecting items from a provided array until the callback provided returns a truthy value
* `eqObjects (...)`         : will take in two objects and returns true or false, based on a perfect match; Returns true if both objects have identical keys with identical values.
* `assertObjectsEqual (...)`: will take in two objects and returns true or false, based on a perfect match; Returns true if both objects have identical keys with identical values.