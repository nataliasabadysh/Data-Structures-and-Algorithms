
// As n grows, the number of iterations grows
function logAtLeast5(n) {
    // If n = 10 million, then there will be 10 million iterations - O(n)
    for (let index = 0; index <= Math.max(5, n); index++) {
        console.log(index); // Fixed from 'i' to 'index'
    }
}
logAtLeast5(10); // Example call to the function
