// commonly used character in the string
function maxChar(str) {
    let charMap = {}
    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1
    }

    let maxChar = ''
    let maxCount = 0
    for (let char in charMap) {
        console.log(char);
        if (charMap[char] > maxCount) {
            maxChar = char
            maxCount = charMap[char]
        }
    }
    return maxChar
}

console.log(maxChar("abcccccd")); // === "c"
