// This function retrieves the first element from the array, often referred to as the "head" of the array. This function should not return the first element as an array. It simply returns the element itself.


const head = function(inputArr) {
  inputArr.slice(1);

  if (inputArr.length >= 1) {
    return inputArr[0];
  } else if (inputArr.length === '') {
    return 'undefined';
  }
};

module.exports = head;