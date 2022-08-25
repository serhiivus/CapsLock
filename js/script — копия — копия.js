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
    parameters: ["wHY DO wE NEED cAPS lOCK?"],
    expectedResult: "Why do We need Caps Lock?",
  },
  {
    parameters: ["FuNkY iS nOt CaPs!"],
    expectedResult: "FuNkY Is nOt CaPs!",
  },
];

function capsLock(str) {
  function changeWord(str) {
    function isLetter(simb) {
      let codeSimbol = simb.charCodeAt(0);
    
      if (codeSimbol >= 65 && codeSimbol <= 90) {
        return true;
      }
      if (codeSimbol >= 97 && codeSimbol <= 122) {
        return true;
      }
      return false;
    }
    
      let result = "";
      let upp;
      let low;
      let change = true;
    
      for (let i = 0; i < str.length; i++) {
        let currentSimbol = str[i];
        upp = currentSimbol.toUpperCase();
        low = currentSimbol.toLowerCase();
        let newsimb = currentSimbol === upp ? low : upp;
        result = result + newsimb;
        if (i > 0) {
          if (isLetter(currentSimbol)) {
            if (currentSimbol === low) {
              change = false;
              break;
            }
          }
        }
      }
      return change ? result : str;
    }
  
  let result = "";
  let currentWord = "";

  for (let simb of str) {
    if (simb === " ") {
      if (currentWord.length != 0) {
        result = result + changeWord(currentWord);
        currentWord = "";
      }
      result = result + simb;
    } else {
      currentWord = currentWord + simb;
    }
  }
  if (currentWord.length != 0) {
    result = result + changeWord(currentWord);
  }
  return result;
}

function getString(obj) {
  return obj.parameters[0];
}


 for (let elem of capsLockTests) {
    let str = getString(elem);
    console.log(str);
    console.log(capsLock(str));
    console.log(elem.expectedResult);
    console.log('--------------');
 }

