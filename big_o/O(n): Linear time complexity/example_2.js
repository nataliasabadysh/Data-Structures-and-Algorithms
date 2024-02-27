
function countUpAndDown(n){
    console.log('Going UP!')
 
    // O(n)
    for (let index = 0; index < n.length; index++) {
     console.log(index)
    }

    console.log('At the top, Going down.. ')
     // O(n)
    for (let j = n.length - 1; j >= 0 ; j--) {
     console.log(j)
    }

    console.log('Back down. Bye!')
 }

// Going UP!
// 0
// 1
// At the top, Going down.. 
// 1
// 0
// Back down. Bye!

console.log(countUpAndDown([7, 8])); 
