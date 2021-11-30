const assert = require('chai').assert;
const tail   = require('../tail');


describe("#tail", () => {
  it("returns [] for [], an empty array", () => {
    assert.deepEqual(tail([]), []);
  });
  it("returns [] for [1], an array with only one element", () => {
    assert.deepEqual(tail([1]), []);
    
  });
  it("returns [] for ['5'], an array with only one element", () => {
    assert.deepEqual(tail(['5']), []);
  });
  it("returns [] for ['Light'], an array with only one element", () => {
    assert.deepEqual(tail(['Light']), []);
  });
  it("returns [2,3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2,3]);
  });
  it("returns ['House'] for ['Light', 'House']", () => {
    assert.deepEqual(tail(['Light', 'House']), ['House']);
  });
  it("returns ['House', 'Labs'] for ['Light', 'House', 'Labs']", () => {
    assert.deepEqual(tail(['Light', 'House', 'Labs']), ['House', 'Labs']);
  });

  // it("returns '["Lighthouse", "Labs"]' for '[Hello, Lighthouse, Labs]'", () => {
  //   assert.deepEqual(tail(["Hello", "Lighthouse","Labs"]), ["Lighthouse", "Labs"]);
  // });

});