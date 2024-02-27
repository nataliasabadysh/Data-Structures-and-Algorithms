// # Big O notation
// - `n` is the length of the input array
// - contains a single loop that iterates over each element 
// - loop of each el array once of the size of the input array

function add(n){
    let total = 0;

    //  input and iterates over each element in the array, 
    for (let index = 0; index < n.length; index++) {
        // incrementing the total variable by 1 for each iteration
        total+=1
        
    }
    return total
}

console.log(add([1, 2, 6, 8, 2, 3])); // 6
