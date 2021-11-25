// /letterPositions function will return all the indices (zero-based positions) in the string where each character is found.
// Use assertArraysEqual to compare the 4 letters and their expected positions.  For each letter in your results object, create an array if one is not already there, create an array if one is not already there, before trying to push new numbers into them.

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

const letterPositions = function(sentence) {
  const results = {};
  let counter = 0;
  for (const letter of sentence) {

    if (letter !== " ") {

      // creating an array for each letter, if one is not already there
      if (!results[letter]) {
        results[letter] = [];
        results[letter].push(sentence.indexOf(letter));
      } else {
        results[letter].push(sentence.indexOf(letter, counter));
      }
    }
    counter += 1;
  }
  return results;
};

//// TEST CODE ////////
console.log(letterPositions('sss'));
console.log(letterPositions('hello'));
console.log(letterPositions('lighthouse in the house'));

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2,3]);
assertArraysEqual(letterPositions("hello").o, [4]);