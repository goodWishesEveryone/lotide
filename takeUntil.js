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

const assertArraysEqual = function(a1, a2) {

  if (eqArrays(a1, a2) === true) {
    return console.log(`🙌 Assertion Passed: ${a1} === ${a2}`);
  } else {
    return console.log(`🙏 Assertion Failed: ${a1} !== ${a2}`);
  }
};

// The function will return a "slice of the array with elements taken from the beginning. It should keep going and keep collecting items from a provided array until the callback provided returns a truthy value.

// The callback should only be provided one value: The item in the array.

const takeUntil = function(array, callback) {
  let newArr = [];
  for (const item of array) {
 
    if (!callback(item)) {
      newArr.push(item);
      
    } else {
      break;
    }
  }
  return newArr;
};

//////////////   TEST CODEs   //////////////
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
// [ 1, 2, 5, 7, 2 ]
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);  

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);  