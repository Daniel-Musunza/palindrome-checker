function palindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    let cleanStr = str.replace(/[\W_]/g, "").toLowerCase();
    
    // Reverse the cleaned string
    let reversedStr = cleanStr.split("").reverse().join("");
    
    // Check if the cleaned string is equal to the reversed string
    return cleanStr === reversedStr;
  }
  
  console.log(palindrome("eye"));
  console.log(palindrome("_eye"));
  console.log(palindrome("race car"));
  console.log(palindrome("not a palindrome"));
  console.log(palindrome("A man, a plan, a canal. Panama"));
  console.log(palindrome("never odd or even"));
  console.log(palindrome("nope"));
  console.log(palindrome("almostomla"));
  console.log(palindrome("My age is 0, 0 si ega ym."));
  console.log(palindrome("1 eye for of 1 eye."));
  console.log(palindrome("0_0 (: /-\ :) 0-0"));
  console.log(palindrome("five|\_/|four"));