# DSA Practice Track

> [Back to main README](../README.md)

## DSA Practice Track

> **Goal:** 150-300 problems, interview-ready
> **Daily Time:** 1-2 hours (starting Week 1, not Month 3)
> **Why This Matters:** DSA is what gets you past the interview gate. In India, 90% of tech interviews start with DSA.

This is not optional. DSA is what separates "applied to 500 jobs, got 0 interviews" from "applied to 50 jobs, got 10 interviews."

---

### Why Start DSA from Week 1?

Most roadmaps tell you to start DSA after learning programming basics. That's wrong for job seekers.

**Reality:**

- Indian tech interviews are DSA-heavy
- Online assessments (OA) gate most applications
- You need 3-6 months of consistent practice
- Starting late = not ready when opportunities come

**The Strategy:**

- Week 1-4: 15-30 min/day, Easy problems only
- Month 2-3: 1 hour/day, Easy + some Medium
- Month 4+: 1.5-2 hours/day, Medium focus
- Month 6+: Mock interviews + Hard problems

---

### Phase 1: Foundations (Month 1-2)

> **Time Investment:** 30-60 min/day | **Goal:** 40-50 Easy problems

Start with patterns that appear most frequently. Master these before moving on.

**Week 1-2: Arrays & Strings**

```javascript
// Pattern: Iteration & Basic Operations

// Two Sum (Classic!)
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

// Contains Duplicate
function containsDuplicate(nums) {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
}

// Valid Anagram
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const count = {};
  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }
  for (const char of t) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
}
```

**Problems to Solve (Week 1-2):**
| # | Problem | Difficulty | Pattern |
|---|---------|------------|---------|
| 1 | Two Sum | Easy | Hash Map |
| 2 | Contains Duplicate | Easy | Hash Set |
| 3 | Valid Anagram | Easy | Hash Map |
| 4 | Best Time to Buy and Sell Stock | Easy | Iteration |
| 5 | Valid Palindrome | Easy | Two Pointers |
| 6 | Maximum Subarray | Easy | Kadane's Algorithm |
| 7 | Merge Sorted Array | Easy | Two Pointers |
| 8 | Move Zeroes | Easy | Two Pointers |
| 9 | Plus One | Easy | Array |
| 10 | Remove Duplicates from Sorted Array | Easy | Two Pointers |

**Week 3-4: Two Pointers & Sliding Window**

```javascript
// Two Pointers Pattern
// Used when: sorted arrays, finding pairs, palindromes

// Valid Palindrome
function isPalindrome(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}

// Container With Most Water
function maxArea(height) {
  let left = 0,
    right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const width = right - left;
    const h = Math.min(height[left], height[right]);
    maxWater = Math.max(maxWater, width * h);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
}

// Sliding Window Pattern
// Used when: subarrays/substrings of fixed or variable size

// Maximum Average Subarray I (Fixed Window)
function findMaxAverage(nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let maxSum = sum;
  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum / k;
}

// Longest Substring Without Repeating Characters (Variable Window)
function lengthOfLongestSubstring(s) {
  const seen = new Map();
  let maxLength = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    if (seen.has(s[end]) && seen.get(s[end]) >= start) {
      start = seen.get(s[end]) + 1;
    }
    seen.set(s[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
```

**Problems to Solve (Week 3-4):**
| # | Problem | Difficulty | Pattern |
|---|---------|------------|---------|
| 11 | Valid Palindrome | Easy | Two Pointers |
| 12 | Reverse String | Easy | Two Pointers |
| 13 | Squares of a Sorted Array | Easy | Two Pointers |
| 14 | 3Sum | Medium | Two Pointers |
| 15 | Container With Most Water | Medium | Two Pointers |
| 16 | Maximum Average Subarray I | Easy | Sliding Window |
| 17 | Longest Substring Without Repeating | Medium | Sliding Window |
| 18 | Minimum Size Subarray Sum | Medium | Sliding Window |
| 19 | Permutation in String | Medium | Sliding Window |
| 20 | Best Time to Buy and Sell Stock | Easy | Sliding Window |

**Week 5-6: Stack & Hash Maps**

```javascript
// Stack Pattern
// Used when: matching pairs, backtracking, monotonic sequences

// Valid Parentheses
function isValid(s) {
  const stack = [];
  const pairs = { ")": "(", "}": "{", "]": "[" };

  for (const char of s) {
    if (char in pairs) {
      if (stack.pop() !== pairs[char]) return false;
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

// Min Stack
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    const min =
      this.minStack.length === 0
        ? val
        : Math.min(val, this.minStack[this.minStack.length - 1]);
    this.minStack.push(min);
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

// Daily Temperatures (Monotonic Stack)
function dailyTemperatures(temperatures) {
  const result = new Array(temperatures.length).fill(0);
  const stack = []; // Stack of indices

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const prevIndex = stack.pop();
      result[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  return result;
}
```

**Problems to Solve (Week 5-6):**
| # | Problem | Difficulty | Pattern |
|---|---------|------------|---------|
| 21 | Valid Parentheses | Easy | Stack |
| 22 | Min Stack | Medium | Stack |
| 23 | Evaluate Reverse Polish Notation | Medium | Stack |
| 24 | Daily Temperatures | Medium | Monotonic Stack |
| 25 | Next Greater Element I | Easy | Monotonic Stack |
| 26 | Group Anagrams | Medium | Hash Map |
| 27 | Top K Frequent Elements | Medium | Hash Map + Heap |
| 28 | Product of Array Except Self | Medium | Prefix/Suffix |
| 29 | Longest Consecutive Sequence | Medium | Hash Set |
| 30 | Subarray Sum Equals K | Medium | Prefix Sum + Map |

**Week 7-8: Binary Search**

```javascript
// Binary Search Template
function binarySearch(nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Not found
}

// Search in Rotated Sorted Array
function search(nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    // Left half is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // Right half is sorted
    else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

// Find Minimum in Rotated Sorted Array
function findMin(nums) {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
}

// Binary Search on Answer (Template)
// Used when: finding minimum/maximum value that satisfies condition
function binarySearchOnAnswer(condition) {
  let left = MIN_VALUE,
    right = MAX_VALUE;
  let answer = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (condition(mid)) {
      answer = mid;
      right = mid - 1; // Find smaller valid answer
      // OR: left = mid + 1;  // Find larger valid answer
    } else {
      left = mid + 1;
    }
  }

  return answer;
}
```

**Problems to Solve (Week 7-8):**
| # | Problem | Difficulty | Pattern |
|---|---------|------------|---------|
| 31 | Binary Search | Easy | Binary Search |
| 32 | Search Insert Position | Easy | Binary Search |
| 33 | First Bad Version | Easy | Binary Search |
| 34 | Search in Rotated Sorted Array | Medium | Binary Search |
| 35 | Find Minimum in Rotated Sorted Array | Medium | Binary Search |
| 36 | Search a 2D Matrix | Medium | Binary Search |
| 37 | Koko Eating Bananas | Medium | Binary Search on Answer |
| 38 | Capacity To Ship Packages | Medium | Binary Search on Answer |
| 39 | Find Peak Element | Medium | Binary Search |
| 40 | Median of Two Sorted Arrays | Hard | Binary Search |

---

### Phase 2: Data Structures (Month 3-4)

> **Time Investment:** 1-1.5 hrs/day | **Goal:** 60-80 more problems

**Week 9-10: Linked Lists**

```javascript
// Linked List Node
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Reverse Linked List (Most Important!)
function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

// Merge Two Sorted Lists
function mergeTwoLists(list1, list2) {
  const dummy = new ListNode(0);
  let current = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  current.next = list1 || list2;
  return dummy.next;
}

// Detect Cycle (Floyd's Algorithm)
function hasCycle(head) {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
}

// Find Middle of Linked List
function middleNode(head) {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

// Remove Nth Node From End
function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0, head);
  let slow = dummy,
    fast = dummy;

  // Move fast n+1 steps ahead
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // Move both until fast reaches end
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
}
```

**Problems to Solve (Week 9-10):**
| # | Problem | Difficulty | Pattern |
|---|---------|------------|---------|
| 41 | Reverse Linked List | Easy | Iteration/Recursion |
| 42 | Merge Two Sorted Lists | Easy | Two Pointers |
| 43 | Linked List Cycle | Easy | Fast & Slow Pointers |
| 44 | Middle of Linked List | Easy | Fast & Slow Pointers |
| 45 | Remove Nth Node From End | Medium | Two Pointers |
| 46 | Palindrome Linked List | Easy | Fast & Slow + Reverse |
| 47 | Reorder List | Medium | Fast & Slow + Merge |
| 48 | Add Two Numbers | Medium | Linked List Math |
| 49 | Copy List with Random Pointer | Medium | Hash Map |
| 50 | LRU Cache | Medium | Hash Map + DLL |

**Week 11-12: Trees**

```javascript
// Tree Node
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Tree Traversals
function inorderTraversal(root) {
  const result = [];

  function inorder(node) {
    if (!node) return;
    inorder(node.left);
    result.push(node.val);
    inorder(node.right);
  }

  inorder(root);
  return result;
}

function preorderTraversal(root) {
  const result = [];

  function preorder(node) {
    if (!node) return;
    result.push(node.val);
    preorder(node.left);
    preorder(node.right);
  }

  preorder(root);
  return result;
}

// Level Order Traversal (BFS)
function levelOrder(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    const levelSize = queue.length;
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}

// Maximum Depth
function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

// Same Tree
function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Invert Binary Tree
function invertTree(root) {
  if (!root) return null;

  [root.left, root.right] = [root.right, root.left];
  invertTree(root.left);
  invertTree(root.right);

  return root;
}

// Lowest Common Ancestor
function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root;
  return left || right;
}

// Validate BST
function isValidBST(root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;

  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
}
```

**Problems to Solve (Week 11-12):**
| # | Problem | Difficulty | Pattern |
|---|---------|------------|---------|
| 51 | Maximum Depth of Binary Tree | Easy | DFS |
| 52 | Same Tree | Easy | DFS |
| 53 | Invert Binary Tree | Easy | DFS |
| 54 | Symmetric Tree | Easy | DFS |
| 55 | Binary Tree Level Order Traversal | Medium | BFS |
| 56 | Validate Binary Search Tree | Medium | DFS |
| 57 | Lowest Common Ancestor of BST | Medium | DFS |
| 58 | Binary Tree Right Side View | Medium | BFS |
| 59 | Count Good Nodes | Medium | DFS |
| 60 | Kth Smallest Element in BST | Medium | Inorder |

**Week 13-14: Graphs**

```javascript
// Graph Representations

// Adjacency List (most common)
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

// From edge list
function buildGraph(edges) {
  const graph = {};
  for (const [a, b] of edges) {
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a); // For undirected graph
  }
  return graph;
}

// BFS - Breadth First Search
function bfs(graph, start) {
  const visited = new Set([start]);
  const queue = [start];
  const result = [];

  while (queue.length) {
    const node = queue.shift();
    result.push(node);

    for (const neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return result;
}

// DFS - Depth First Search
function dfs(graph, start, visited = new Set()) {
  visited.add(start);
  console.log(start);

  for (const neighbor of graph[start] || []) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}

// Number of Islands
function numIslands(grid) {
  if (!grid.length) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islands = 0;

  function dfs(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === "0") {
      return;
    }

    grid[r][c] = "0"; // Mark as visited
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        islands++;
        dfs(r, c);
      }
    }
  }

  return islands;
}

// Clone Graph
function cloneGraph(node) {
  if (!node) return null;

  const visited = new Map();

  function dfs(node) {
    if (visited.has(node)) {
      return visited.get(node);
    }

    const clone = new Node(node.val);
    visited.set(node, clone);

    for (const neighbor of node.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  }

  return dfs(node);
}

// Course Schedule (Cycle Detection)
function canFinish(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);

  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
  }

  const visited = new Set();
  const inStack = new Set();

  function hasCycle(course) {
    if (inStack.has(course)) return true;
    if (visited.has(course)) return false;

    visited.add(course);
    inStack.add(course);

    for (const next of graph[course]) {
      if (hasCycle(next)) return true;
    }

    inStack.delete(course);
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return false;
  }

  return true;
}
```

**Problems to Solve (Week 13-14):**
| # | Problem | Difficulty | Pattern |
|---|---------|------------|---------|
| 61 | Number of Islands | Medium | BFS/DFS |
| 62 | Clone Graph | Medium | BFS/DFS |
| 63 | Max Area of Island | Medium | DFS |
| 64 | Pacific Atlantic Water Flow | Medium | DFS |
| 65 | Surrounded Regions | Medium | DFS |
| 66 | Rotting Oranges | Medium | BFS |
| 67 | Course Schedule | Medium | Topological Sort |
| 68 | Course Schedule II | Medium | Topological Sort |
| 69 | Graph Valid Tree | Medium | Union Find |
| 70 | Number of Connected Components | Medium | Union Find |

---

### Phase 3: Algorithms (Month 4-6)

> **Time Investment:** 1.5-2 hrs/day | **Goal:** 80-100 more problems

**Week 15-16: Backtracking**

```javascript
// Backtracking Template
function backtrack(result, current, choices, start) {
    if (/* base case */) {
        result.push([...current]);
        return;
    }

    for (let i = start; i < choices.length; i++) {
        // Make choice
        current.push(choices[i]);

        // Recurse
        backtrack(result, current, choices, i + 1);  // or i for reuse

        // Undo choice (backtrack)
        current.pop();
    }
}

// Subsets
function subsets(nums) {
    const result = [];

    function backtrack(start, current) {
        result.push([...current]);

        for (let i = start; i < nums.length; i++) {
            current.push(nums[i]);
            backtrack(i + 1, current);
            current.pop();
        }
    }

    backtrack(0, []);
    return result;
}

// Permutations
function permute(nums) {
    const result = [];
    const used = new Array(nums.length).fill(false);

    function backtrack(current) {
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            used[i] = true;
            current.push(nums[i]);
            backtrack(current);
            current.pop();
            used[i] = false;
        }
    }

    backtrack([]);
    return result;
}

// Combination Sum
function combinationSum(candidates, target) {
    const result = [];

    function backtrack(start, current, remaining) {
        if (remaining === 0) {
            result.push([...current]);
            return;
        }
        if (remaining < 0) return;

        for (let i = start; i < candidates.length; i++) {
            current.push(candidates[i]);
            backtrack(i, current, remaining - candidates[i]);  // Can reuse
            current.pop();
        }
    }

    backtrack(0, [], target);
    return result;
}

// N-Queens
function solveNQueens(n) {
    const result = [];
    const board = Array.from({ length: n }, () => '.'.repeat(n));

    const cols = new Set();
    const posDiag = new Set();  // r + c
    const negDiag = new Set();  // r - c

    function backtrack(row) {
        if (row === n) {
            result.push([...board]);
            return;
        }

        for (let col = 0; col < n; col++) {
            if (cols.has(col) || posDiag.has(row + col) || negDiag.has(row - col)) {
                continue;
            }

            cols.add(col);
            posDiag.add(row + col);
            negDiag.add(row - col);
            board[row] = board[row].substring(0, col) + 'Q' + board[row].substring(col + 1);

            backtrack(row + 1);

            cols.delete(col);
            posDiag.delete(row + col);
            negDiag.delete(row - col);
            board[row] = board[row].substring(0, col) + '.' + board[row].substring(col + 1);
        }
    }

    backtrack(0);
    return result;
}
```

**Problems to Solve (Week 15-16):**
| # | Problem | Difficulty | Pattern |
|---|---------|------------|---------|
| 71 | Subsets | Medium | Backtracking |
| 72 | Subsets II | Medium | Backtracking |
| 73 | Permutations | Medium | Backtracking |
| 74 | Permutations II | Medium | Backtracking |
| 75 | Combination Sum | Medium | Backtracking |
| 76 | Combination Sum II | Medium | Backtracking |
| 77 | Letter Combinations of Phone | Medium | Backtracking |
| 78 | Palindrome Partitioning | Medium | Backtracking |
| 79 | Word Search | Medium | Backtracking |
| 80 | N-Queens | Hard | Backtracking |

**Week 17-20: Dynamic Programming**

```javascript
// DP Steps:
// 1. Define state: What information do I need to solve subproblems?
// 2. Define recurrence: How do states relate to each other?
// 3. Define base case: What are the trivial subproblems?
// 4. Compute order: Which direction to fill the table?
// 5. Optimize space: Can I reduce space complexity?

// Fibonacci (Classic DP)
function fib(n) {
  if (n <= 1) return n;

  let prev2 = 0,
    prev1 = 1;
  for (let i = 2; i <= n; i++) {
    const curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}

// Climbing Stairs
function climbStairs(n) {
  if (n <= 2) return n;

  let prev2 = 1,
    prev1 = 2;
  for (let i = 3; i <= n; i++) {
    const curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}

// House Robber
function rob(nums) {
  if (nums.length === 1) return nums[0];

  let prev2 = 0,
    prev1 = 0;
  for (const num of nums) {
    const curr = Math.max(prev1, prev2 + num);
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}

// Coin Change
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

// Longest Increasing Subsequence
function lengthOfLIS(nums) {
  const dp = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

// Longest Common Subsequence
function longestCommonSubsequence(text1, text2) {
  const m = text1.length,
    n = text2.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

// 0/1 Knapsack
function knapsack(weights, values, capacity) {
  const n = weights.length;
  const dp = Array.from({ length: n + 1 }, () =>
    new Array(capacity + 1).fill(0),
  );

  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          dp[i - 1][w - weights[i - 1]] + values[i - 1],
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
}

// Edit Distance
function minDistance(word1, word2) {
  const m = word1.length,
    n = word2.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  // Base cases
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] =
          1 +
          Math.min(
            dp[i - 1][j], // Delete
            dp[i][j - 1], // Insert
            dp[i - 1][j - 1], // Replace
          );
      }
    }
  }

  return dp[m][n];
}
```

**Problems to Solve (Week 17-20):**
| # | Problem | Difficulty | Pattern |
|---|---------|------------|---------|
| 81 | Climbing Stairs | Easy | 1D DP |
| 82 | Min Cost Climbing Stairs | Easy | 1D DP |
| 83 | House Robber | Medium | 1D DP |
| 84 | House Robber II | Medium | 1D DP |
| 85 | Coin Change | Medium | 1D DP |
| 86 | Maximum Product Subarray | Medium | 1D DP |
| 87 | Longest Increasing Subsequence | Medium | 1D DP |
| 88 | Word Break | Medium | 1D DP |
| 89 | Partition Equal Subset Sum | Medium | 0/1 Knapsack |
| 90 | Unique Paths | Medium | 2D DP |
| 91 | Unique Paths II | Medium | 2D DP |
| 92 | Longest Common Subsequence | Medium | 2D DP |
| 93 | Edit Distance | Medium | 2D DP |
| 94 | Best Time to Buy and Sell Stock with Cooldown | Medium | State Machine DP |
| 95 | Target Sum | Medium | 0/1 Knapsack |

**Week 21-22: Heaps & Priority Queues**

```javascript
// JavaScript doesn't have built-in heap, use array with helper functions
// Or use a library like 'heap-js'

// For interviews, know:
// 1. Heap operations: insert O(log n), extractMin/Max O(log n), peek O(1)
// 2. Building heap from array: O(n)
// 3. When to use: k largest/smallest, merge k sorted, median stream

// Kth Largest Element
function findKthLargest(nums, k) {
  // Using QuickSelect (optimal)
  function quickSelect(left, right, k) {
    const pivot = nums[right];
    let p = left;

    for (let i = left; i < right; i++) {
      if (nums[i] <= pivot) {
        [nums[i], nums[p]] = [nums[p], nums[i]];
        p++;
      }
    }
    [nums[p], nums[right]] = [nums[right], nums[p]];

    if (p === k) return nums[p];
    if (p < k) return quickSelect(p + 1, right, k);
    return quickSelect(left, p - 1, k);
  }

  return quickSelect(0, nums.length - 1, nums.length - k);
}

// Top K Frequent Elements
function topKFrequent(nums, k) {
  const count = new Map();
  for (const num of nums) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  // Bucket sort approach
  const buckets = Array.from({ length: nums.length + 1 }, () => []);
  for (const [num, freq] of count) {
    buckets[freq].push(num);
  }

  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    result.push(...buckets[i]);
  }

  return result.slice(0, k);
}

// Merge K Sorted Lists (use min heap in interview)
function mergeKLists(lists) {
  const dummy = new ListNode(0);
  let current = dummy;

  // Filter out empty lists and create array of [value, node]
  const nodes = lists.filter((list) => list).map((list) => list);

  while (nodes.length) {
    // Find minimum (in interview, use heap for O(log k))
    let minIdx = 0;
    for (let i = 1; i < nodes.length; i++) {
      if (nodes[i].val < nodes[minIdx].val) {
        minIdx = i;
      }
    }

    current.next = nodes[minIdx];
    current = current.next;

    if (nodes[minIdx].next) {
      nodes[minIdx] = nodes[minIdx].next;
    } else {
      nodes.splice(minIdx, 1);
    }
  }

  return dummy.next;
}
```

**Problems to Solve (Week 21-22):**
| # | Problem | Difficulty | Pattern |
|---|---------|------------|---------|
| 96 | Kth Largest Element in Array | Medium | QuickSelect/Heap |
| 97 | Top K Frequent Elements | Medium | Heap/Bucket Sort |
| 98 | K Closest Points to Origin | Medium | Heap |
| 99 | Merge K Sorted Lists | Hard | Heap |
| 100 | Find Median from Data Stream | Hard | Two Heaps |

---

### DSA Problem-Solving Framework

**For every problem, follow this process:**

```
1. UNDERSTAND (5 min)
   □ What are the inputs? Types? Constraints?
   □ What is the expected output?
   □ Walk through examples manually
   □ Ask clarifying questions
   □ Identify edge cases

2. PLAN (10 min)
   □ What pattern does this remind me of?
   □ What data structures could help?
   □ Can I solve a simpler version first?
   □ What's the brute force solution?
   □ How can I optimize?
   □ Estimate time/space complexity

3. IMPLEMENT (15 min)
   □ Write clean, readable code
   □ Use meaningful variable names
   □ Handle edge cases
   □ Think out loud (in interviews)

4. TEST (5 min)
   □ Trace through with examples
   □ Test edge cases
   □ Verify time/space complexity

5. OPTIMIZE (5 min if time)
   □ Can I reduce time complexity?
   □ Can I reduce space complexity?
   □ Is the code clean?
```

---

### DSA Resources

| Resource                | Purpose                 | Link                                       |
| ----------------------- | ----------------------- | ------------------------------------------ |
| NeetCode 150            | Curated problem list    | https://neetcode.io/practice               |
| NeetCode Roadmap        | Visual learning path    | https://neetcode.io/roadmap                |
| LeetCode                | Practice platform       | https://leetcode.com                       |
| LeetCode Patterns       | Pattern recognition     | https://seanprashad.com/leetcode-patterns/ |
| Blind 75                | Classic interview list  | https://neetcode.io/practice (subset)      |
| Tech Interview Handbook | Complete guide          | https://www.techinterviewhandbook.org/     |
| VisuAlgo                | Algorithm visualization | https://visualgo.net/                      |
| Big-O Cheat Sheet       | Complexity reference    | https://www.bigocheatsheet.com/            |

---

### DSA Tracking Template

Create a spreadsheet or use Notion to track:

```
| Date | Problem | Difficulty | Pattern | Solved? | Time | Optimal? | Notes |
|------|---------|------------|---------|---------|------|----------|-------|
| 1/18 | Two Sum | Easy | Hash Map | ✅ | 10m | ✅ | Classic pattern |
| 1/18 | 3Sum | Medium | Two Ptr | ✅ | 25m | ❌ | Review sorting trick |
| 1/19 | ... | | | | | | |
```

**Weekly Review:**

- Problems solved this week: \_\_
- Patterns practiced: \_\_
- Weak areas identified: \_\_
- Next week focus: \_\_

---

### DSA Milestones

| Month | Milestone                   | Target    | Status |
| ----- | --------------------------- | --------- | ------ |
| 1-2   | Easy problems comfortable   | 50 Easy   | [ ]    |
| 3     | Medium problems starting    | 30 Medium | [ ]    |
| 4     | Interview ready (basic)     | 100 total | [ ]    |
| 5     | Medium problems comfortable | 80 Medium | [ ]    |
| 6     | Ready for most interviews   | 150 total | [ ]    |

---
