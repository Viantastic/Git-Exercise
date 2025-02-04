//1. Write a code to display the multiplication table of a given integer

function multiplicationTable(num, range = 10) {
    for (let i = 1; i <= range; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
  }

  let num = 5;
  multiplicationTable(num);

//2. Write a code to check whether a string is a palindrome or not

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the cleaned string and compare it to the original cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
  }
  
  let str = "A man, a plan, a canal, Panama";
  console.log(`${str} is a palindrome:`, isPalindrome(str));

//3. Write a code to convert centimeter to kilometer

function convertCmToKm(centimeters) {
  const kilometers = centimeters / 100000;
  return kilometers;
}

const centimeters = 500000;
const kilometers = convertCmToKm(centimeters);
console.log(`${centimeters} cm is equal to ${kilometers} km.`);

//4. Write a code to format number as currency (IDR)

function formatCurrencyIDR(amount) {
  return amount.toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
  });
}

const amount = 12345678;
const formattedAmount = formatCurrencyIDR(amount);
console.log(formattedAmount); // Output: Rp12.345.678

//5. Write a code to remove the first occurrence of a given “search string” from a string

function removeFirstOccurrence(str, searchString) {
  const index = str.indexOf(searchString);
  if (index !== -1) {
      return str.slice(0, index) + str.slice(index + searchString.length);
  }
  return str; // Return original string if searchString is not found
}

const originalString = "Hello, this is a simple test string.";
const searchString = "simple";
const updatedString = removeFirstOccurrence(originalString, searchString);
console.log(updatedString); // Output: "Hello, this is a test string."

//6. Write a code to capitalize the first letter of each word in a string

function capitalizeFirstLetterOfEachWord(str) {
  return str
      .split(' ') // Split the string into an array of words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter and make the rest lowercase
      .join(' '); // Join the array back into a string
}

const inputString1 = "hello world, this is a test string.";
const capitalizedString = capitalizeFirstLetterOfEachWord(inputString1);
console.log(capitalizedString);

//7. Write a code to swap the case of each character from string 

function swapCase(str) {
  return str
      .split('') // Split the string into an array of characters
      .map(char => 
          char === char.toUpperCase() 
          ? char.toLowerCase()  // If the character is uppercase, convert to lowercase
          : char.toUpperCase()  // If the character is lowercase, convert to uppercase
      )
      .join(''); // Join the array back into a string
}

const inputString2 = "Hello World!";
const swappedString = swapCase(inputString2);
console.log(swappedString);

//8. Write a code to find the largest of two given integers

function findLargest(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "Both numbers are equal.";
  }
}

let num5 = 10;
let num6 = 20;

console.log("The largest number is:", findLargest(num5, num6));

//9. Write a conditional statement to sort three numbers

function sortThreeNumbers(a, b, c) {
  let sorted;

  if (a <= b && a <= c) {
    if (b <= c) {
      sorted = [a, b, c];
    } else {
      sorted = [a, c, b];
    }
  } else if (b <= a && b <= c) {
    if (a <= c) {
      sorted = [b, a, c];
    } else {
      sorted = [b, c, a];
    }
  } else {
    if (a <= b) {
      sorted = [c, a, b];
    } else {
      sorted = [c, b, a];
    }
  }

  return sorted;
}

let num1 = 25;
let num2 = 10;
let num3 = 15;

console.log("Sorted numbers:", sortThreeNumbers(num1, num2, num3));

//10. Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.

function checkInputType(input) {
  if (typeof input === "string") {
    return 1; // Input is a string
  } else if (typeof input === "number") {
    return 2; // Input is a number
  } else {
    return 3; // Input is of another data type
  }
}

console.log(checkInputType("Hello")); // Output: 1
console.log(checkInputType(123));     // Output: 2
console.log(checkInputType(true));    // Output: 3
console.log(checkInputType(null));    // Output: 3
console.log(checkInputType({}));      // Output: 3

//11. Write a code to change every letter a into * from a string of input

function replaceAWithStar(input: any) {
  if (typeof input !== "string") {
    return "Input must be a string.";
  }
  return input.replace(/a/g, "*");
}

let inputString = "An apple a day keep the doctor away";
console.log(replaceAWithStar(inputString));