
function insertArray(array,variable) {
    let newArray =[variable];
    for (let i = 0; i<array.length; i++){
        newArray.push(array[i])
    }
    return newArray
}
console.log(insertArray([1, 3, 5, 6, 7,],8))