// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// SOLUTION EXPLAINED
// toString(2) can convert integers into binary.
// The more you know 🌈

function addBinary(a,b) {
    return (a+b).toString(2)
  }

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

// SOLUTION EXPLAINED
// String() converts the input to a string
// .split("") splits the strings characters with commas and places them into an array
// .map(Number) maps over each item and reverts them back to a number
// .reverse() reverses the array

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// SOLUTION EXPLAINED
// if statement checks to see if the boolean is true which in this case it is since the only values that return false are 0, -0, null, false, NaN, undefined, and empty strings

function boolToWord( bool ){
  if(bool === true){
    return "Yes"
  } else {
    return "No"
  }
}

// My solution was a bit long and there is a shorter way to write it using a ternary operator

function boolToWord( bool ){
  return bool ? 'Yes':'No';
}

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
  let stringNum = String(num).split("")
  let squared = stringNum.map(num => Math.pow(num, 2))
  return Number(squared.join(""));
}

// Yet again my solution was a bit long. A shorter solution would be 

function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount (n) {
  if(n >= 10){
    return "Great, now move on to tricks"
  } else if(n < 10){
    return "Keep at it until you get it"
  }
}

// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

var min = function(list){
  return Math.min(...list);
}

var max = function(list){ 
  return Math.max(...list);
}

// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
  return s.sort()[0].split('').join('***');
}

// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height
  }
}

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase 
// in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase
// letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

String.prototype.toAlternatingCase = function () {
  return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
  return Math.floor(time * 0.5);
}

// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

function findDifference(a, b) {
  return Math.abs(a.reduce((a, b) => a * b) - b.reduce((a, b) => a * b))
}