"use strict";
//1.  isPrime - Returns true or false, indicating whether the given number is prime.
//isPrime(0)                          // false
//isPrime(1)                          // false
//isPrime(17)                         // true
//isPrime(10000000000000)             // false

function isPrime(param) {
  for (let i = 2; i < param; i++) {
    if (param % i == 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrime(2));

//2. factorial - Returns a number that is the factorial of the given number.
// factorial(0)                        // 1
// factorial(1)                        // 1
// factorial(6)                        // 720

function factorial(param) {
  let res = 1;
  for (let i = 2; i <= param; i++) {
    res = res * i;
  }
  return res;
}

//console.log(factorial(6));

//3. fib - Returns the nth Fibonacci number.
// fib(0)                              // 0
// fib(1)                              // 1
// fib(10)                             // 55
// fib(20)                             // 6765

function fib(param) {
  if (param == 0 || param == 1) {
    return param;
  }
  let pred = 0;
  let tec = 1;
  let res;
  for (let i = 2; i <= param; i++) {
    res = tec + pred;
    pred = tec;
    tec = res;
  }
  return res;
}

//console.log(fib(20));

//4. isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
// isSorted([])                        // true
// isSorted([-Infinity, -5, 0, 3, 9])  // true
// isSorted([3, 9, -3, 10])            // false

function isSorted(param) {
  let length = param.length;
  if (length < 3) {
    return true;
  }

  let direction;

  for (let i = 1; i < length; i++) {
    if (param[i - 1] != param[i]) {
      direction = param[i - 1] >= param[i];
      break;
    }
  }

  if (direction == undefined) {
    return true;
  }

  for (let i = 1; i < length; i++) {
    if (direction != param[i - 1] >= param[i]) {
      return false;
    }
  }

  return true;
}

//console.log(isSorted([33, 9, 7, 2]) );

//5.  reverse - Reverses the given string (yes, using the built in reverse function is cheating).
//reverse('')                         // ''
//reverse('abcdef')                   // 'fedcba'

function reverse(param) {
  let res = "";

  for (let simb of param) {
    res = simb + res;
  }
  return res;
}

//console.log(reverse("abcdef"));

//6. indexOf - Implement the indexOf function for arrays.
//indexOf([1, 2, 3], 1)               // 0
//indexOf([1, 2, 3], 4)               // -1

function indexOf(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == elem) {
      return i;
    }
  }
  return -1;
}

//console.log(indexOf([1, 2, 3], 1) );

//7. isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
// isPalindrome('')                                // true
// isPalindrome('abcdcba')                         // true
// isPalindrome('abcd')                            // false
// isPalindrome('A man a plan a canal Panama')     // true

function isPalindrome(param) {
  let par = "";

  for (let simb of param) {
    par = par + (simb == " " ? "" : simb);
  }

  let rev = reverse(par);
  return rev.toLowerCase() == par.toLowerCase();
}

//console.log(isPalindrome('abcd'));

// 8. missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n,
// and returns the missing number in the sequence (there are either no missing numbers, or exactly one
// missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.
// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined

function missing(param) {
  let length = param.length;
  if (length < 2) {
    return undefined;
  }
  let summ = 0;
  let summFull = 0;
  for (let i = 0; i < length; i++) {
    summ = summ + param[i];
    summFull = summFull + i + 1;
  }
  return summFull == summ ? undefined : summFull + length + 1 - summ;
}

//console.log(missing([1, 4, 3]) );

//9. isBalanced - Takes a string and returns true or false indicating whether its
//curly braces are balanced.
// isBalanced('}{')                      // false
// isBalanced('{{}')                     // false
// isBalanced('{}{}')                    // false
// isBalanced('foo { bar { baz } boo }') // true
// isBalanced('foo { bar { baz }')       // false
// isBalanced('foo { bar } }')           // false

function isBalanced(param) {
  let summ = 0;
  for (let simb of param) {
    if (simb == "{") {
      summ = summ + 1;
    }
    if (simb == "}") {
      summ = summ - 1;
    }
    if (summ < 0) {
      return false;
    }
  }
  return summ == 0;
}

console.log(isBalanced('foo { bar } }'));
