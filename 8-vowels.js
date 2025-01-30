// function vowels(str) {
//     let matches = str.match(/[aiueou]/gi)
//     return matches ? matches.length : 0;
// }

function vowels(str) {
    const vowelCheck = [ 'a', 'e', 'i', 'o', 'u']
    
    let count = 0
    for (const char of str.toLowerCase) {
        if(vowelCheck.includes(char)) count++
    }

    return count
}

console.log(vowels("why"));
