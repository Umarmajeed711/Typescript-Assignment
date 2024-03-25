"use strict";
// " name cases"
let myName = "Muhammad Umar";
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log(myName.replace(/\b\w/g, function (char) { return char.toLocaleUpperCase(); }));
