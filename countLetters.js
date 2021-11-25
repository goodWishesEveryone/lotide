// This function takes in a string and returns an object where each unique character encountered in the string is a property of the object and the value for that property/key should be the number of occurrences for that character.  Spaces are skipped and not counted.

const assertEqual = function(actual, expected) {
  return actual === expected ? `🙌  Assertion Passed: ${actual} === ${expected}`
    : `🙏  Assertion Failed: ${actual} !== ${expected}`;
};


const countLetters = function(string) {

  let charactersList = {};

  // skip and not count spaces
  for (let char of string.replace(/ /g, "")) {
    //loops through the string and evaluate if the character is already in the object: if false, the character is added to the object, if true, its frequency increase a unit.
    if (!charactersList[char]) {
      charactersList[char] = 1;
    } else {
      charactersList[char]++;
    }
  }
  return charactersList;
};

console.log(countLetters("L H L"));
console.log(countLetters("lighthouse in the house"));
// { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }
console.log(countLetters("   "));

console.log(assertEqual((countLetters("LHL"))["L"], 2));
console.log(assertEqual((countLetters("LHL"))["H"], 1));