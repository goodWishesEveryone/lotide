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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`🙌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🙏 Assertion Failed: ${actual} !== ${expected}`);
  }
};



// TEST CODEs:

// TEST CASE 1: Check the returned array elements
let result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);         // ensure we get back two elements
assertEqual(result[0], "Lighthouse");  // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");        // ensure second element is "Labs"


// TEST CASE 2: An array with only one element should yield an empty array for its tail, thus array length is 0
let result1 = tail(["Lighthouse"]);
assertEqual(result1.length, 0);        // ensure we get back 0 elements
assertEqual(result1[0], undefined);    // ensure first element is "undefined"


// TEST CASE 3: An empty array should yield an empty array for its tail, thus array length is 0
let result2 = [];
console.log(tail(result2));           // results an empty array
assertEqual(result2.length, 0);       // ensure we get back 0 elements
assertEqual(result2[0], undefined);   // ensure first element is "undefined"

// TEST CASE 4: Checking the original array that it shouldn't be modified.
let words = ["Peace", "Lighthouse"];
console.log(tail(words));             // return "Lighthouse" as tail
assertEqual(words.length, 2);         // original array should still have 2 elements!

let words1 = ["Light"];
console.log(tail(words1));            // return empty as tail
assertEqual(words1.length, 1);        // original array should still have 1 elements!

let words2 = [];
console.log(tail(words2));            // return empty as tail
assertEqual(words2.length, 0);        // original array is empty, thus 0 elements!
