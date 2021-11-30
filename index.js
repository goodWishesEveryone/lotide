// index.js
const head              = require('./head');
const tail              = require('./tail');
const middle            = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual       = require('./assertEqual');
const countLetters      = require('./countLetters');
const countOnly         = require('./countOnly');
const eqArrays          = require('./eqArrays');
const letterPositions   = require('./letterPositions');
const map               = require('./map');
const without           = require('./without');
const findKeyByValue    = require('./findKeyByValue');
// const findKey           = require('./findKey');

module.exports = {
  head              : head,
  tail              : tail,
  middle            : middle,
  assertArraysEqual : assertArraysEqual,
  assertEqual       : assertEqual,
  countLetters      : countLetters,
  countOnly         : countOnly,
  eqArrays          : eqArrays,
  letterPositions   : letterPositions,
  map               : map,
  without           : without,
  findKeyByValue    : findKeyByValue
 // findKey           : findKey
 // takeUntil         : takeUntil
};
