"use strict";

/**
 * cAPS lOCK
 *
 * зАЧЕМ НУЖНА КЛАВИША cAPS lOCK?
 * Caps Lock — клавиша компьютерной клавиатуры, предназначенная для автоматической (постоянной) смены регистра
 * букв со строчных на прописные. Будучи случайно нажатой, она приводит к последствиям вроде первого абзаца в
 * условии этой задачи.
 *
 * Будем считать, что слово набрано с ошибочно нажатой клавишей Caps Lock, если:
 * - либо оно полностью состоит из прописных букв;
 * - либо прописными являются все его буквы, кроме первой.
 *
 * В таком случае, нужно автоматически поменять регистр всех букв на противоположный. Например,
 * регистр букв слов «hELLO», «HTTP», «z» должен быть изменен.
 * Напишите программу, которая применяет описанное выше правило или оставляет слово без изменения, если оно не применимо.
 *
 * Входные данные
 * записано слово, состоящее из прописных или строчных букв латинского алфавита. Длина слова — от 1 до 100 символов включительно.
 *
 * Выходные данные
 * Выведите результат обработки данного слова.
 */

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
            if (currentSimbol !== upp) {
              change = false;
              break;
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

