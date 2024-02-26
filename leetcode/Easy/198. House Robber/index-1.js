// 198. House Robber

// You are a professional robber planning to rob houses along a street. Each house has a certain amount
//of money stashed, the only constraint stopping you from robbing each of them is that
// adjacent houses have security systems connected and it will automatically contact the police
// if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return
// the maximum amount of money you can rob tonight without alerting the police.

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

function rob(nums) {
  // If there is only one house, return its value
  if (nums.length === 1) {
    return nums[0];
  }

  // Initialize a DP array with the same length as nums to store the maximum amount that can be robbed up to each house
  let dp = new Array(nums.length);

  // Set the first two elements in the DP array
  // dp[0] is the maximum amount that can be robbed from the first house
  // dp[1] is the maximum amount that can be robbed from the first two houses
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  // Iterate through the rest of the houses
  for (let i = 2; i < nums.length; i++) {
    // For each house, calculate the maximum amount that can be robbed up to that house
    // It is the maximum of the previous house's total and the total of the current house plus the total two houses back

    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    // dp[i] 4
    // dp[i] 6
    // dp[i] 6
    // dp[i] 7
  }

  // Return the maximum amount that can be robbed from all the houses, which is the last element in the DP array
  // [ 1, 2, 4, 6, 6, 7 ]
  return dp[nums.length - 1];
}

console.log(rob([1, 2, 3, 4, 2, 1])); // Output: 7
