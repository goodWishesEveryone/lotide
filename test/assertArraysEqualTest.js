const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual([1, 2, 3], [1, 2, 3]);              // => true thus PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]);              // => false thus fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);  // => true thus PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);    // => false thus fail
assertArraysEqual(["1", "2", "3"], ["1", "2"]);       // => false thus fail
assertArraysEqual(["1", "2", "3"], []);               // => false thus fail