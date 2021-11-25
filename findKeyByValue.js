// Function findKeyByValue takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

const assertEqual = function(actual, expected) {
  return actual === expected ? `🙌  Assertion Passed: ${actual} === ${expected}`
    : `🙏  Assertion Failed: ${actual} !== ${expected}`;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(object, value) {
  return Object.keys(object).find(key => object[key] === value);
};




const map = {"first" : "1", "second" : "2"};
console.log(findKeyByValue(map,"2"));
// If no key with that given value is found, then it should return undefined.
console.log(findKeyByValue(map,"3"));


console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
// If no key with that given value is found, then it should return undefined.
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));