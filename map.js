// Our map function will take in two arguments: an array to map and a callback function.
// The map function will return a new array based on the results of the callback function.

//Add a collection of words to your empty map.js file:


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Call map and pass in our words and a simple arrow function.
const results1 = map(words, word => word[0]);
console.log(results1);


const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0, len = arr1.length; i < len; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


// const assertArraysEqual = function(a1, a2) {

//   if (eqArrays(a1, a2) === true) {
//     return console.log(`🙌 Assertion Passed: ${a1} === ${a2}`);
//   } else {
//     return console.log(`🙏 Assertion Failed: ${a1} !== ${a2}`);
//   }
// };



const assertArraysEqual = function(actual, expected) {
  return eqArrays(actual, expected)
    ? `🙌 Assertion Passed: ${actual} === ${expected}`
    : `🙏 Assertion Failed: ${actual} !== ${expected}`;

};



///////// TEST CODE //////////

const myCallBack = word => word[0];

console.log(assertArraysEqual(map(["ground", "control", "to", "major", "tom"], myCallBack),[ 'g', 'c', 't', 'm', 't' ]));
console.log(assertArraysEqual(map(["Good", "Morning"], myCallBack),["G", "M"]));
console.log(assertArraysEqual(map(["Happy", "Friday"], myCallBack),["H", "F"]));
console.log(assertArraysEqual(map(["wonderful", "greetings"], word => word[0]),["w", "g"]));

// module.exports = map;