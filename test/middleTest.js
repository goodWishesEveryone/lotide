const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for [], an empty array", () => {
    assert.deepEqual(middle([]), []);
  });
  it("returns [] for [1]; For arrays with one or two elements, there is no middle", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [] for [1,2]; For arrays with one or two elements, there is no middle", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns [1,2,3] for [2]; For arrays (NUMBER) with odd number of elements ", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
  it("returns [3] for [1, 2, 3, 4, 5]; for arrays (NUMBER) with odd number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns [2, 3] for [1, 2, 3, 4]; for arrays (NUMBER) with an even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [3,4] for [1, 2, 3, 4, 5, 6]; for arrays (NUMBER) with an even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
  });


  it("returns [House] for ['Light', 'House', 'Labs']; for arrays (STRING) with odd number of elements", () => {
    assert.deepEqual(middle(['Light', 'House', 'Labs']),['House']);
  });
  it("returns ['House', 'Labs'] for ['Light', 'House', 'Labs','Inc']; for arrays (STRING) with an even number of elements", () => {
    assert.deepEqual(middle(['Light', 'House', 'Labs','Inc']),['House', 'Labs']);
  });
});