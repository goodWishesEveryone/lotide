// The function findKey will take in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`🙌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🙏 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (const key in object) {
    const objValue = object[key];
    if (callback(objValue)) {
      return key;
    }
  }
};

// TEST CODE
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"

assertEqual(findKey({
  "Light" : "house",
  "Peace" : "village",
  "Stella": "maris"
}, x => x === "house"), "Light");  // => "Light"

assertEqual(findKey({
  "Light" : "house",
  "Peace" : "village",
  "Stella": "maris"
}, x => x === "Love"), undefined);  // => undefined