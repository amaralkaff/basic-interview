// commonly used character in the string
function maxChar(str) {
    const charMap = {};
    let max = 0
    let maxChar = ''

    for (let char of str) {
        if (charMap[char]) {
            charMap[char] = charMap[char] + 1
        } else {
            charMap[char] = 1
        }

    }
    for(let [key,value] of Object.entries(charMap)) {
        if ( value > max) {
            max = value
            maxChar = key
        } 
    }

    return maxChar
}

console.log(maxChar("abcccccd")); // === "c"
