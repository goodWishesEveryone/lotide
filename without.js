// The without function will return a subset of a given array, removing unwanted elements.  It takes in a source array and itemsToRemove array and return a new array with only those elements from source that are not present in the itemsToRemove array.


const without = function(source, itemsToRemove) {

  // make a Set to hold values from itemsToRemove converting the itemsToRemove array into a Set object. Set object and has a method called has() to check if a specific element is contained within that Set.

  const toDeleteSet = new Set(itemsToRemove);

  const newArr = source.filter((name) => {
    // return those elements not in toDeleteSet
    return !toDeleteSet.has(name);
  });
  return newArr;
};

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

// The without function should be returning a new array and not modify the original array that is passed in. Let's write a test case to ensure this:

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse","labs"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []);                         // => true thus PASS
assertArraysEqual(without([1, 2, 3, 4], [3, 2, 1]), [5]);                     // => false thus fail
assertArraysEqual(without(["1", "2", "3", 4], ["1", 2, "3"]), ["2", "6"]);    // => true thus PASS
assertArraysEqual(without(["1", "2", "3"], ["1", "2", 3]), ["3"]);            // => false thus fail
assertArraysEqual(without(["1", "2", "3"], ["1", "3"]), ["2"]);               // => false thus fail