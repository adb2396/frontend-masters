// Write a recursive function sum that calculates the sum of an array of integers.

function arraySum(array) {
  let last = array.pop();

  if (array.length == 0) {
    return last;
  }

  array[array.length - 1] += last;

  return arraySum(array);
}

/* Test 1 */
console.log(arraySum([1, 1, 1])); // Log: 3

/* Test 2 */
console.log(arraySum([1, 2, 3, 4, 5, 6])); // Log: 21
