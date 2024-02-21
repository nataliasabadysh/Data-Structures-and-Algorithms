// Using XOR to create a simple encryption (not secure for real-world use):

const key = 123;
const message = 456;

const encrypted = message ^ key; // 435
const decrypted = encrypted ^ key; // 456
