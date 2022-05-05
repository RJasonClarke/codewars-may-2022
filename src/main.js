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

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

// SOLUTION EXPLAINED
// String() converts the input to a string
// .split("") splits the strings characters with commas and places them into an array
// .map(Number) maps over each item and reverts them back to a number
// .reverse() reverses the array