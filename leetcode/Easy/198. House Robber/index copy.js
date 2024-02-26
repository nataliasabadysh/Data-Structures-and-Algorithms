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

// Input: nums = 1,2,3,4,2,1

// dp[0]: 1, dp[1]: 2

// dp[2]: 4
// dp[3]: 6
// dp[4]: 6
// dp[5]: 7

// DP Array: 1,2,4,6,6,7

// Maximum amount that can be robbed: 7
// Final Output: 7
console.log(`Final Output: ${rob([1, 2, 3, 4, 2, 1])}`); // Output: 7
