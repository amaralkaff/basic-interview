function reverseInt(int) {
    let str =  int.toString().split(" ").reverse().join("")
    return parseInt(str)
}

console.log(reverseInt(-51));
