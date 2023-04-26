function findExtraEdge(root) {
  let visited = new Set();
  let extraEdge = null;
  let parent = new Map();

  // Perform a depth-first search on the tree
  function dfs(node) {
    visited.add(node);
    let children = [node.left, node.right];
    for (let child of children) {
      if (child) {
        if (visited.has(child)) {
          // Found a cycle, so the extra edge is between the current node and its child
          extraEdge = [node, child];
        } else {
          parent.set(child, node);
          dfs(child);
        }
      }
    }
  }

  // Start the DFS from the root node
  dfs(root);

  if (!extraEdge) {
    // The tree is already a valid binary tree
    return root;
  } else {
    // Remove the extra edge to eliminate the cycle
    let [u, v] = extraEdge;
    if (parent.get(v) === u) {
      u.left = null;
    } else {
      u.right = null;
    }
    return root;
  }
}

// Define the binary tree
let root = {
  value: 1,
  left: {
    value: 2,
    left: { value: 4 },
    right: { value: 5 },
  },
  right: {
    value: 3,
    left: { value: 6 },
    right: { value: 7 },
  },
};

// Add an extra edge to create a cycle
root.right.right.left = root.left;

// Find and eliminate the extra edge
root = findExtraEdge(root);

console.log(root);
