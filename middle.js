// This middle function will take in an array and return the middle-most element(s) of the given array. This means that the length of the returned elements could vary.

// For arrays with one or two elements, there is no middle. Return an empty array.


const middle = function(array) {
  let middleIndex = [];
  // if array has one or two elements, return empty array
  if (array.length <= 2) {
    middleIndex = [];
    // if array has odd number of elements return single middle
  } else if (array.length % 2 !== 0) {
    middleIndex = [array[Math.round(array.length / 2) - 1]];
    // if array has even number of elements return 2 elements in the middle
  } else if (array.length % 2 === 0) {
    middleIndex = [
      array[Math.round(array.length / 2 - 1)],
      array[Math.round(array.length / 2)],
    ];
  }
  return middleIndex;
};

module.exports = middle;