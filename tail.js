// This function returns the "tail" of an array: everything except for the first item (head) of the provided array. This tail function should be returning a new array and not modify the original array that is passed in.

const tail = function(inputArr) {
  let tailArray = [];
  // remove the head or first elements from the array, thus tailArray contains the tail only -- that is, everything except for the first item or head of the provided array.
  tailArray = inputArr.slice(1);
  if (inputArr.length === 0 || inputArr.length === 1) {
    return console.log(tailArray);
  } else return console.log(tailArray);
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`🙌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🙏 Assertion Failed: ${actual} !== ${expected}`);
  }
};



// TEST CODEs:
// Check the original array, it shouldn't be modified

let words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); // original array should still have 3 elements!

//An array with only one element as well as an empty array should yield an empty array for its tail.
let words1 = ["Labs"];
tail(words1);
assertEqual(words1.length, 1); // original array should still have 1 elements!

let words2 = [];
tail(words2);
assertEqual(words2.length, 0); // original array should still have 0 elements!