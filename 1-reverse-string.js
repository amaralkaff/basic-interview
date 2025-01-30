// function reverse(str) {
//     return str.split("").reverse().join("")
// }

function reverse(str) {
    let reverse = ''
    for (let char of str) {
        reverse = char + reverse
    }
    return reverse
}



console.log(reverse('hello'));
