//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

var fizzbuzz = function (x) {
//
// YOUR CODE GOES HERE
//
    if(x === 2) {
        return 2;
    } else if(x % 3 === 0 && x % 5 === 1) {
        return "fizz";
    } else if(x % 3 > 0 && x % 5 === 0) {
        return "buzz";
    } else if(x % 3 === 0 && x % 5 === 0) {
        return "fizzbuzz";
    } else if(x % 3 != 0 && x % 5 != 0) {
        return x;
    } 
};

fizzbuzz(2);

module.exports = { fizzbuzz: fizzbuzz };
