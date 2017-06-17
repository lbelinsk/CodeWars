///////Take a Number And Sum Its Digits Raised To The Consecutive Powers And////////

// Instructions:

// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

// In effect: 89 = 8^1 + 9^2

// The next number in having this property is 135.

// See this property again: 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Examples:

// sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

// sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]



// Solution:

cont sumDigPow = (a, b) => {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  
  return arr.filter(isLegal);
}

const isLegal = a => {
  const sum = a
    .toString()
    .split('')
    .map((digit, index) => Math.pow(digit, index + 1))
    .reduce((acc, num) => acc + Number(num), 0);
    
  return sum === Number(a);
}