# Palindrome Checker

This is a JavaScript function that checks if a given string is a palindrome. It removes non-alphanumeric characters and converts the string to lowercase before performing the palindrome check.

## Function

```javascript

    function palindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    let cleanStr = str.replace(/[\W_]/g, "").toLowerCase();
    
    // Reverse the cleaned string
    let reversedStr = cleanStr.split("").reverse().join("");
    
    // Check if the cleaned string is equal to the reversed string
    return cleanStr === reversedStr;
    }

```
## Usage

Here are some example calls to the `palindrome` function:

```javascript

    console.log(palindrome("eye"));  // true
    console.log(palindrome("_eye"));  // true
    console.log(palindrome("race car"));  // true
    console.log(palindrome("not a palindrome"));  // false
    console.log(palindrome("A man, a plan, a canal. Panama"));  // true
    console.log(palindrome("never odd or even"));  // true
    console.log(palindrome("nope"));  // false
    console.log(palindrome("almostomla"));  // false
    console.log(palindrome("My age is 0, 0 si ega ym."));  // true
    console.log(palindrome("1 eye for of 1 eye."));  // false
    console.log(palindrome("0_0 (: /-\ :) 0-0"));  // true
    console.log(palindrome("five|\_/|four"));  // false

```
The function returns `true` if the input string is a palindrome, and `false` otherwise.

Note: The function treats alphanumeric characters as case-insensitive, and ignores non-alphanumeric characters during the palindrome check.
