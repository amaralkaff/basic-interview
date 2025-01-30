function chunk(array, size) {
    const result = [];
    for (let index = 0; index < array.length; index++) {
        if (index < size) {
            result.push(array.slice(index, index + size))
            }
        }
    return result;
}

console.log(chunk([1, 2, 3, 4, 5, 6], 3));
