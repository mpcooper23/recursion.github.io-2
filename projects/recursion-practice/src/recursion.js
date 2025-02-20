// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n, output = 1) {
  //base
  if(n < 0){
    return null;
  }
  if(n === 1 || n === 0){
    return output;
  }
output *= n;

return factorial(n -1, output)
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, output = 0) {

  if(array.length === 0){
    return output;
  }

  output += array[0]

 return sum(array.slice(1), output)
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  let sum = 0;

  // Iterate through each element in the array
  for (let element of array) {
    // If the element is an array, recursively call arraySum
    if (Array.isArray(element)) {
      sum += arraySum(element);
    } else if (typeof element === 'number') {
      // If the element is a number, add it to the sum
      sum += element;
    }
  }

  // Return the total sum
  return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
  // Handle negative numbers by converting them to positive
  if (n < 0) {
    n = -n;
  }

  // Base case: if n is 0, it's even
  if (n === 0) {
    return true;
  }

  // Base case: if n is 1, it's odd
  if (n === 1) {
    return false;
  }

  // Recursive call: reduce n by 2
  return isEven(n - 2);
};



// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // Base case: if n is 0, return 0
  if (n === 0) {
    return 0;
  }

  // If n is positive, sum numbers below n
  if (n > 0) {
    return (n - 1) + sumBelow(n - 1);
  }

  // If n is negative, sum numbers above n
  if (n < 0) {
    return (n + 1) + sumBelow(n + 1);
  }

};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, output = []) {
// Base case: if x is equal to or one step away from y, return the accumulated output
if (x === y || x === y - 1 || x === y + 1) {
  return output;
}

// Recursive case for ascending order
if (x < y) {
  output.push(x + 1);
  return range(x + 1, y, output);
}

// Recursive case for descending order
if (x > y) {
  output.push(x - 1);
  return range(x - 1, y, output);
}
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //base
  if(base === 0){
return 0;
  }
  if(exp === 0){
    return 1;
  }
  if(exp === 1){
    return base;
  }
    // Handle negative exponents
    if (exp < 0) {
      return 1 / exponent(base, -exp);
    }
  //recursion
  return base * exponent(base, exp - 1)
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
//base case
if(n === 0){
  return false;
}
if(n === 1){
return true
}
  // Check if n is divisible by 2 and recurse
  if (n % 2 !== 0) {
    return false;
  }
  //recursion
  return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  // Base case
  if (string.length === 0) {
    return '';
  }

  // Recursion
  return string[string.length - 1] + reverse(string.slice(0, -1));
};


// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // Base case: if the string is empty or has one character
  if (string.length <= 1) {
    return true;
  }
  
  // Check first and last characters
  if (string[0] !== string[string.length - 1]) {
    return false;
  }
  
  // Recursion: check the substring excluding the first and last characters
  return palindrome(string.slice(1, -1));
};


// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (x / y !== 0){
    return x - y * (x / y)
  }
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').

var multiply = function(a, b) {
  if (b === 0) {
    return 0;
  }
  if (b > 0) {
    return a + multiply(a, b - 1);
  }
  if (b < 0) {
    return -multiply(a, -b);
  }
};


// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
  if (y === 0) {
    return "Division by zero is not allowed.";
  }

  let result = 0;
  let isNegative = false;

  if (x < 0) {
    isNegative = !isNegative;
    x = -x;
  }
  if (y < 0) {
    isNegative = !isNegative;
    y = -y;
  }

  while (x >= y) {
    x -= y;
    result++;
  }

  return isNegative ? -result : result;
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (y === 0) {
    return x;
  }
  return gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  // Base case: if both strings are empty, they are identical
  if (str1.length === 0 && str2.length === 0) {
    return true;
  }
  // Base case: if the first characters are different or lengths are different, they are not identical
  if (str1[0] !== str2[0] || str1.length !== str2.length) {
    return false;
  }
  // Recursive case: compare the rest of the strings
  return compareStr(str1.slice(1), str2.slice(1));
};



// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  // Base case: if the string is empty, return an empty array
  if (str.length === 0) {
    return [];
  }
  // Recursive case: take the first character and concatenate it with the array created from the rest
  return [str[0]].concat(createArray(str.slice(1)));
};


// 17. Reverse the order of an array
var reverseArr = function(array) {
  // Base case: if the array is empty, return an empty array
  if (array.length === 0) {
    return [];
  }
  // Recursive case: take the last element and concatenate it with the reverse of the rest
  return [array[array.length - 1]].concat(reverseArr(array.slice(0, -1)));
};


// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  // Base case: if length is 0, return an empty array
  if (length === 0) {
    return [];
  }
  // Recursive case: add the value to the array and call buildList with length - 1
  return [value].concat(buildList(value, length - 1));
};


// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  // Base case: if the array is empty, return 0
  if (array.length === 0) {
    return 0;
  }
  // Check if the first element matches the value
  const match = array[0] === value ? 1 : 0;
  // Recursive case: add the match result to the count from the rest of the array
  return match + countOccurrence(array.slice(1), value);
};


// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  // Base case: if the array is empty, return an empty array
  if (array.length === 0) {
    return [];
  }
  // Recursive case: apply the callback to the first element and concatenate with the result of rMap on the rest
  return [callback(array[0])].concat(rMap(array.slice(1), callback));
};


// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
  let count = 0;
  
  for (let k in obj) {
    // Check if the current key matches the target key
    if (k === key) {
      count++;
    }
    // If the value is an object, recursively count keys in the nested object
    if (typeof obj[k] === 'object') {
      count += countKeysInObj(obj[k], key);
    }
  }
  
  return count;
};


// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
  let count = 0;
  
  for (let key in obj) {
    // Check if the current value matches the target value
    if (obj[key] === value) {
      count++;
    }
    // If the value is an object, recursively count values in the nested object
    if (typeof obj[key] === 'object') {
      count += countValuesInObj(obj[key], value);
    }
  }
  
  return count;
};


// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
  for (let k in obj) {
    // If the current key matches the target key, rename it
    if (k === key) {
      obj[newKey] = obj[k];
      delete obj[k];
    }
    // If the value is an object, recursively replace keys in the nested object
    if (typeof obj[k] === 'object') {
      replaceKeysInObj(obj[k], key, newKey);
    }
  }
  return obj;
};


// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n, sequence = [0, 1]) {
  // Base case: if the sequence has n+1 elements, return the sequence
  if (sequence.length > n) {
    return sequence;
  }
  // Calculate the next Fibonacci number
  const nextFibo = sequence[sequence.length - 1] + sequence[sequence.length - 2];
  // Add the next Fibonacci number to the sequence
  sequence.push(nextFibo);
  // Recursive call to build the sequence
  return fibonacci(n, sequence);
};


// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  // Base case: return 0 if n is 0, and 1 if n is 1
  if(n < 0){
    return null;
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  // Recursive case: return the sum of the two preceding Fibonacci numbers
  return nthFibo(n - 1) + nthFibo(n - 2);
};


// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, output = []) {
  //base
if(input.length === 0){
  return output;
}


  output.push(input[0].toUpperCase())


  //recursion
  return capitalizeWords(input.slice(1), output)
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, output = []) {
  // Base case: if the array is empty, return the output array
  if (array.length === 0) {
    return output;
  }

  // Capitalize the first letter of the first string and add it to the output array
  const capitalized = array[0][0].toUpperCase() + array[0].slice(1);
  output.push(capitalized);

  // Recursive call to process the rest of the array
  return capitalizeFirst(array.slice(1), output);
};


// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  let sum = 0;

  for (let key in obj) {
    const value = obj[key];
    // Check if the value is a number and even
    if (typeof value === 'number' && value % 2 === 0) {
      sum += value;
    }
    // If the value is an object, recursively calculate the sum of even numbers
    if (typeof value === 'object') {
      sum += nestedEvenSum(value);
    }
  }

  return sum;
};


// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
  // Base case: if the array is empty, return an empty array
  if (arrays.length === 0) {
    return [];
  }

  // Recursive case: check the first element
  const first = arrays[0];
  const rest = arrays.slice(1);

  // If the first element is an array, flatten it and concatenate with the rest
  if (Array.isArray(first)) {
    return flatten(first).concat(flatten(rest));
  } else {
    // If the first element is not an array, concatenate it with the flattened rest
    return [first].concat(flatten(rest));
  }
};


// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  // Base case: if the string is empty, return the tally object
  if (str.length === 0) {
    return obj;
  }

  // Get the first character of the string
  const char = str[0];

  // Update the tally for the character
  if (obj[char]) {
    obj[char]++;
  } else {
    obj[char] = 1;
  }

  // Recursive call to process the rest of the string
  return letterTally(str.slice(1), obj);
};


// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, index = 0, result = []) {
  // Base case: if the index is equal to the list length, return the result
  if (index >= list.length) {
    return result;
  }

  // Add the current element to the result if it's not the same as the previous element
  if (index === 0 || list[index] !== list[index - 1]) {
    result.push(list[index]);
  }

  // Recursive call to process the next element
  return compress(list, index + 1, result);
};


// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, index = 0, result = []) {
  // Base case: if the index is equal to the array length, return the result
  if (index >= array.length) {
    return result;
  }

  // Add the current element to the result if it's not a zero or if it's the first zero in a series
  if (array[index] !== 0 || (array[index] === 0 && (index === 0 || array[index - 1] !== 0))) {
    result.push(array[index]);
  }

  // Recursive call to process the next element
  return minimizeZeroes(array, index + 1, result);
};


// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  return array.map((num, index) => {
    // Make the number positive if the index is even, negative if odd
    if (index % 2 === 0) {
      return Math.abs(num);
    } else {
      return -Math.abs(num);
    }
  });
};


// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  const digitToWord = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine'
  };

  return str.split(' ').map(word => {
    // Check if the word is a single digit and replace it with the corresponding word
    return digitToWord[word] || word;
  }).join(' ');
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
