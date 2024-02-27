

// Space: 
// - let total = 0;
// - for(let index = 0;

// Time: array.length

function sum(array){
    let total = 0; // space: numbers 

     // space: numbers
    for (let index = 0; index < array.length; index++) { // time: array.length
        // Space: O(1)
        total += array[index];
    }
    return total
}


console.log(sum([2, 5, 6, 7, 8,12, 445,5])); // 490