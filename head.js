// This function retrieves the first element from the array, often referred to as the "head" of the array. This function should not return the first element as an array. It simply returns the element itself.

const head = function(inputArr) {
  inputArr.slice(1);

  if (inputArr.length >= 1) {
    return inputArr[0];
  } else if (inputArr.length === '') {
    return 'undefined';
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`🙌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🙏 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// Here are some test assertions for you to implement and make pass:
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// Here are some examples how they should be handled:
// 1)  An array with only one element should still yield that one element as its head
assertEqual(head(['hi']), 'hi');
// 2)  An empty array should yield undefined as its head
assertEqual(head([]),);
