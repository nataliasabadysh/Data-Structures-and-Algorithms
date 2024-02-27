// # Big O notation

function printAllPairs(n){
    // O(n)
    for (let i = 0; i < n.length; i++) {
        // O(n^2)
        for (let j = 0; j < n.length; j++) {
            console.log(i, j)   
        } 
    }
}

// 0 0
// 0 1
// 1 0
// 1 1

printAllPairs([2, 6])