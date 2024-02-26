function rob(nums) {
  console.log(`Input: nums = ${nums}`);

  // If there is only one house, return its value
  if (nums.length === 1) {
    console.log(`Only one house with value ${nums[0]}`);
    return nums[0];
  }

  // Initialize a DP array with the same length as nums to store the maximum amount that can be robbed up to each house
  let dp = new Array(nums.length);

  // Set the first two elements in the DP array
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  console.log(`dp[0]: ${dp[0]}, dp[1]: ${dp[1]}`);

  // Iterate through the rest of the houses
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    console.log(`dp[${i}]: ${dp[i]}`);
  }

  // Return the maximum amount that can be robbed from all the houses, which is the last element in the DP array
  console.log(`DP Array: ${dp}`);
  console.log(`Maximum amount that can be robbed: ${dp[nums.length - 1]}`);
  return dp[nums.length - 1];
}

// Input: nums = 7,5,3,4,9,20
// dp[0]: 7, dp[1]: 7
// dp[2]: 10
// dp[3]: 11
// dp[4]: 19
// dp[5]: 31
// DP Array: 7,7,10,11,19,31
// Maximum amount that can be robbed: 31

// Final Output: 31
console.log(`Final Output: ${rob([7, 5, 3, 4, 9, 20])}`); // Output: 31
