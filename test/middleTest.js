const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');



// TEST CODEs
console.log('------  TEST middle function  ------');
// For arrays with one or two elements, there is no middle; return an empty array.
console.log(middle([1]));
console.log(middle([1, 2]));
// For arrays with odd number of elements, an array containing a single middle element should be returned.
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));


// TEST ASSERTIONs
console.log('------  TEST middle function with assertArraysEqual : PASS  ------');
assertArraysEqual(middle([]), []);                    // => true thus PASS
assertArraysEqual(middle([1]), []);                   // => true thus PASS
assertArraysEqual(middle([1, 2, 3]), [2]);            // => true thus PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);      // => true thus PASS
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]);       // => true thus PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => true thus PASS
assertArraysEqual(middle(['Light', 'House', 'Labs']),['House']); // => true thus PASS
assertArraysEqual(middle(['Light', 'House', 'Labs','Inc']),['House', 'Labs']); // => true thus PASS

console.log('------  TEST middle function with assertArraysEqual : FAIL  ------');
assertArraysEqual(middle(['Light', 'House', 'Labs']),['Labs']); // => false thus FAIL
assertArraysEqual(middle(['Light', 'House', 'Labs', 'Inc']),['Labs']); // => false thus FAIL
