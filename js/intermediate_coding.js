"use strict";
// 1. // isBalanced2 - Like the isBalanced function you implemented above,
// // but supports 3 types of braces: curly {}, square [], and round ().
// // A string with interleaving braces should return false.
// isBalanced2('(foo { bar (baz) [boo] })') // true
// isBalanced2('foo { bar { baz }')         // false
// isBalanced2('foo { (bar [baz] } )')      // false

function isBalanced2(param) {
  let arr = [];
  for (let simb of param) {
    if (simb == "{" || simb == "(" || simb == "[") {
      arr.push(simb);
    }
    if (simb == "}" || simb == ")" || simb == "]") {
      let contSimb = simb == "}" ? "{" : simb == ")" ? "(" : "[";
      if (contSimb != arr[arr.length - 1]) {
        return false;
      } else {
        arr.pop();
      }
    }
  }
  return arr.length == 0;
}

//console.log(isBalanced2("} baz"));

// 2. // uniq - Takes an array of numbers, and returns the unique numbers. Can you do it in O(N) time?
// uniq([])                              // []
// uniq([1, 4, 2, 2, 3, 4, 8])           // [1, 4, 2, 3, 8]

function uniq(parr) {
  function cutArray(parr) {
    let res = [];
    for (let elem of parr) {
      if (elem == parr[0]) {
        continue;
      }
      res.push(elem);
    }
    return res;
  }
  //====================
  let res = [];
  while (parr.length != 0) {
    res.push(parr[0]);
    parr = cutArray(parr);
  }
  return res;
}

//console.log(uniq([1, 4, 2, 2, 3, 4, 8, 4, 7, 47]));

//3. // intersection - Find the intersection of two arrays. Can you do it in O(M+N)
//time (where M and N are the lengths of the two arrays)?
//intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]); // [4, 1]
//intersection([1, 5, 4, 2], [7, 12]); // []

function intersection(arr1, arr2) {
  let res = [];
  for (let el1 of arr1) {
    for (let el2 of arr2) {
      if (el1 == el2) {
        res.push(el1);
      }
    }
  }
  return res;
}

//console.log(intersection([1, 5, 4, 2], [7, 12]))

// 4. // assignDeep - Like Object.assign, but merges objects deeply.
// assignDeep({ a: 1 }, {})                                      // { a: 1 }
// assignDeep({ a: 1 }, { a: 2 })                                // { a: 2 }
// assignDeep({ a: 1 }, { a: { b: 2 } })                         // { a: { b: 2 } }
// assignDeep({ a: { b: { c: 1 }}}, { a: { b: { d: 2 }}, e: 3 }) // { a: { b: { c: 1, d: 2 }}, e: 3 }
function showObject(obj) {
  let str = "{";
  let commas = "";
  for (let key in obj) {
    str = str + commas;
    commas = ",";
    str = str + key + ":";

    if (typeof obj[key] == "object") {
      str = str + showObject(obj[key]);
    } else {
      str = str + obj[key];
    }
  }
  return str + "}";
}

function assignDeep(target, source) {
  for (let key in source) {
    if (typeof target[key] == "object" && typeof source[key] == "object") {
      target[key] = assignDeep(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

console.log(
  showObject(assignDeep({ a: { b: { c: 1 } } }, { a: { b: { d: 2 } }, e: 3 }))
);
