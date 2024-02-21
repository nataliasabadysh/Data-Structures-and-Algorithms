function factorial(n) {
  console.log(`Entering factorial with n = ${n}`);
  if (n === 0 || n === 1) {
    console.log(`Base case reached with n = ${n}, returning 1`);
    return 1;
  } else {
    const result = n * factorial(n - 1);
    console.log(`Returning ${result} for factorial(${n})`);
    return result;
  }
}

console.log(`Factorial of 6 is ${factorial(6)}`);
