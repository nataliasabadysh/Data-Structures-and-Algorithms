function getMultiplyList(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            console.log(`${i} * ${j} = ${i * j}`); 
        }
    }
}

getMultiplyList(2); // 0(n*n)

// 1 * 1 = 1
// 1 * 2 = 2
// 2 * 1 = 2
// 2 * 2 = 4