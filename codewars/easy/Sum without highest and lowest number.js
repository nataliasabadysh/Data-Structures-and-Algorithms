// Sum without highest and lowest number

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

function sumArray(array) {
  if (!array || array.length <= 1) {
    return 0;
  }

  const sortedArray = array.slice().sort((a, b) => a - b);

  const sum = sortedArray.reduce((acc, val, index) => {
    if (index !== 0 && index !== sortedArray.length - 1) {
      return acc + val;
    }
    return acc;
  }, 0);

  return sum;
}

// assert.strictEqual( sumArray(null)                     , 0 );
// assert.strictEqual( sumArray([ ])                      , 0 );
// assert.strictEqual( sumArray([ 3 ])                    , 0 );
// assert.strictEqual( sumArray([ 3, 5 ])                 , 0 );
// assert.strictEqual( sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
// assert.strictEqual( sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
// assert.strictEqual( sumArray([ -6, -20, -1, -10, -12 ]), -28 );
// assert.strictEqual( sumArray([ -6, 20, -1, 10, -12 ])  , 3 );

function sumArray(array) {
  if (!array || array.length <= 1) {
    return 0;
  }

  // Except the highest and the lowest element
  let min = array[0];
  let max = array[0];
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    // Sum all the numbers of a given array
    sum += array[i];

    if (array[i] < min) {
      min = array[i];
    }

    if (array[i] > max) {
      max = array[i];
    }
  }
  // Sum = Except the highest and the lowest element
  return sum - min - max;
}

console.log(sumArray([6, 2, 1, 8, 10])); // 16
console.log(sumArray([1, 1, 11, 2, 3])); // 6
console.log(sumArray(null)); // 0
console.log(sumArray([3])); // 0
