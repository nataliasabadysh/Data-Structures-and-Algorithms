function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Example usage: Generate the first 10 terms of the Fibonacci sequence
for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}
``;
