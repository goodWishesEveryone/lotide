// const assertEqual = require('./assertEqual');

// This function returns the "tail" of an array: everything except for the first item (head) of the provided array. This tail function should be returning a new array and not modify the original array that is passed in.

const tail = function(inputArr) {
  let tailArray = [];
  // remove the head or first elements from the array, thus tailArray contains the tail only -- that is, everything except for the first item or head of the provided array.
  tailArray = inputArr.slice(1);
  if (inputArr.length === 0 || inputArr.length === 1) {
    return tailArray = [];
  } else
  
    return tailArray;
};

module.exports = tail;