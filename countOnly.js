//This function will take in a collection of items and return counts for a specific subset of those items.
// countOnly function accepts 2 parameters:
// 1). allItems: an array of strings that we need to look through
// 2) itemsToCount: an object specifying what to count

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`🙌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🙏 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    //console.log(item);
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


// TEST ASSERTIONs:
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
assertEqual(result1["Salima"], undefined);
assertEqual(result1["Salima"], 2);    // not in the itemsToCount thus FAIL
assertEqual(result1["Jason"], 2);     // not counting right thus FAIL