


function double(array){
    let newArray = []; // space: array

     // space: let
    for (let index = 0; index < array.length; index++) { // time: array.length
        // Space: O(n)
        newArray.push( 2 * array[index]);
    }
    return newArray
}

console.log(double([2, 5, 6, 7, 8,12, 445,5]));
// [
//     4, 10,  12, 14,
//    16, 24, 890, 10
//  ]