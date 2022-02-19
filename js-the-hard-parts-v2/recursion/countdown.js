// Write a recursive function countdown that accepts a positive
// integer n as an input and logs every number from n(inclusive)
// to 0(exclusive) to the console.

function countdown(n) {
  if (n == 0) {
    return;
  }

  console.log(n);
  countdown(n - 1);
}

/* Test 1 */
countdown(5);
// Log:
//  5
//  4
//  3
//  2
//  1
