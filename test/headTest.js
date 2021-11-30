// test/headTest.js

const assertEqual = require('../assertEqual');
const head = require('../head');

// Here are some test assertions for you to implement and make pass:
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// Here are some examples how they should be handled:
// 1)  An array with only one element should still yield that one element as its head
assertEqual(head(['hi']), 'hi');
// 2)  An empty array should yield undefined as its head
assertEqual(head([]),);