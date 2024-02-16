// 21. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Complexity
// Time complexity:
// O(n+m)

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Space complexity:
// O(n+m)
const mergeTwoLists = function (list1, list2) {
  // Create a new dummy node to act as the head of the merged list
  let dummy = new ListNode();
  let tail = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  // Attach the remaining elements from either list1 or list2
  tail.next = list1 || list2;

  // Return the merged list, which starts from dummy.next
  return dummy.next;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
