//const eqArrays = require('../eqArrays');
const eqObjects = require('../eqObjects');
const assertObjectsEqual = require('../assertObjectsEqual');


////////  TEST CODEs:  /////////
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
const abc = { a: "1", b: "2", c: "3" };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(eqObjects(cd, cd2), false);    // => false
assertObjectsEqual(eqObjects(cd, cd2), false);    // => false
assertObjectsEqual(eqObjects(ab, ba), true);      // => true
assertObjectsEqual(eqObjects(ab, abc), false);    // => false
assertObjectsEqual(eqObjects(cd, dc), true);      // => true