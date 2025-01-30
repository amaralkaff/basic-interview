// commonly used character in the string
function maxChar(str) {
    let charMap = {}
    console.log(charMap, "charMap");
    for (let char of str) {
        console.log(char, "char");
        charMap[char] = charMap[char] + 1 || 1
        console.log(charMap, "charMap");
    }

    let maxChar = ''
    console.log(maxChar, "maxChar");
    let maxCount = 0
    console.log(maxCount, "maxCount");
    for (let char in charMap) {
        console.log(char);
        if (charMap[char] > maxCount) {
            console.log(charMap[char], "charMap[char]");
            maxChar = char
            console.log(maxChar, "maxChar");
            maxCount = charMap[char]
            console.log(maxCount, "maxCount");
        }
        console.log(maxChar, "maxChar");
    }
    console.log(maxChar, "maxChar");
    return maxChar
}

console.log(maxChar("abcccccd")); // === "c"
