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