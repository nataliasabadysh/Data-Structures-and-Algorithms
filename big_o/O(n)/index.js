function getSunOfArray(array){
    let sum = 0;

    for (let index = 0; index < array.length; index++) {
        sum += array[index]
    }

    return sum 
}
console.log(getSunOfArray([2, 4]))