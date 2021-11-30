// Function eqArrays takes in two arrays and returns true or false, based on a perfect match.
// Possible ways of structuring our function's logic:
// 1)  Use the Object.keys function on both objects and compare their lengths. If not equal, there's no point in going further: return false
// 2)  After that check, loop through the keys returned by Object.keys for one of the objects (not both). Use for..of since the keys are an array. Other loop types can work too, but this one is most elegant and idiomatic, thanks to ES6
// 3)  Inside our loop, compare both objects' values for that key. Use === to ensure that the types are the same!
// 4)  As soon as there is not a match, we can return false
// 5)  Our control flow will therefore only get to the end of the loop if all the keys matched. We can and should thus return true at the end (after the loop)

const eqArrays = function(arr1, arr2) {
  // 1) check if both array lengths are the same, if not return false
  if (arr1.length !== arr2.length) {
    return false;
  }

  // check if values are equal and of the same type, if not return false
  for (let i = 0, len = arr1.length; i < len; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  //  for (let val of arr1) {
  //     for (let val2 of arr2)
  //     if (val !== val2) {
  //       return false
  //     }
  //   }


  return true;
};

module.exports = eqArrays;