function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
};

console.log(fizzBuzz(15));
console.log(fizzBuzz(7));

//---str reverse----//

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("nairobi"));


//---palindrome check----//
const isPalindrome = (str) => {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));


//--find the largest number in an array---//
const findLargestNumber = (arr) => {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(findLargestNumber([1, 5, 3, 9, 2]));
console.log(findLargestNumber([-1, -5, -3, -9, -2]));


//--count vowels in a string---//

const countVowels = (str) => {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is awesome"));


