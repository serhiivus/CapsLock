"use strict";
var capsLockTests = [
  {
    parameters: ["cAPS"],
    expectedResult: "Caps",
  },
  {
    parameters: ["Lock"],
    expectedResult: "Lock",
  },
  {
    parameters: ["wHY    DO    wE NEED cAPS lOCK?"],
    expectedResult: "Why do We need Caps Lock?",
  },
  {
    parameters: ["FuNkY iS nOt CaPs!"],
    expectedResult: "FuNkY Is nOt CaPs!",
  },
];

for (let elem of capsLockTests) {
  let str = elem.parameters[0];
  console.log(str);
  let arr = str.split(' ').map(function (word) { return word.toUpperCase()
    
  }).join(' ');
  console.log(arr);
  console.log(elem.expectedResult);
  console.log("--------------");
}
