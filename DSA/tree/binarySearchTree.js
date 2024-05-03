// BST O(log n)

const { log } = require("console");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class binarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  search(root, value) {
    if (!root) return false;
    if (root.value === value) {
      return true;
    } else {
      if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }
  preOrder(root) {
    if (root) {
      console.log("preOrder: ", root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log("inorder", root.value);
      this.inOrder(root.right);
    }
  }
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log("postOrder", root.value);
    }
  }
  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log("levelOrder:", curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) queue.push(curr.right);
    }
  }
  isValidBST(root, min = null, max = null) {
    if (!root) return true;
    if (min && root.val <= min.val) return false;
    if (max && root.val >= max.val) return false;
    return (
      this.isValidBST(root.left, min, root) &&
      this.isValidBST(root.right, root, max)
    );
  }
  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }
  max(root) {
    if(!root.right){
      return root.value
    }else{
      return this.max(root.right)
    }
  }
}

const arr = [10, 5, 15, 3, 7];
const bst = new binarySearchTree();

// Check isEmpty
console.log("isEmpty: ", bst.isEmpty());

// INSERTION
for (let i = 0; i < arr.length; i++) {
  bst.insert(arr[i]);
}

console.log("isEmpty: ", bst.isEmpty());

//SEARCH BY VALUE
console.log(bst.search(bst.root, 15));

//DEPTH FIRST SEARCH (DFS) traverse
bst.preOrder(bst.root); // Root - Left - Right
bst.inOrder(bst.root); // Left - Root - Right
bst.postOrder(bst.root); // Left - Right - Root

// BREADTH FIRST SEARCH (BFS) traverse
bst.levelOrder();

// IS VALID BST
console.log(bst.isValidBST(bst.root));

// FIND MIN VALUE
console.log("min:", bst.min(bst.root));

// FIND MAX VALUE
console.log("max:", bst.max(bst.root));
