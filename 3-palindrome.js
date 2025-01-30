function palindrome(str) {
    let palindrome = str.split("").reverse().join("")

    if (palindrome === str) {
        return true
    }

    return false
    
}


function palindromeTwoPointer(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right ) {
        if (str[left] !== str[right]) {
            return true
        }
        left++
        right--
    }
    return false
}

console.log(palindrome("kaayak"));
console.log(palindromeTwoPointer("kaayak"));

