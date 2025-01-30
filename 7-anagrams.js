function charMap(str) {
    const charMap = {}
    str = str.toLowerCase().replace(/[\W]/g,"")
    for (let char of str) {
        charMap[char] = ++charMap[char] || 1
    }
    return charMap
}

function anagrams(stringA, stringB) {
    const charMapA = charMap(stringA)
    const charMapB = charMap(stringB)
    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) return false
    for (let key in charMapA) {
        if (charMapA[key] !== charMapB[key]) return false
    }

    return true
}

console.log(anagrams("RAIL! SAFETY!", 'fairy tales'));
