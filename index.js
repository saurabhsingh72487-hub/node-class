// Node Class
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// Tree Class
class Tree {
  constructor(array) {
    this.root = this.buildTree([...new Set(array)].sort((a, b) => a - b));
  }

  buildTree(array) {
    if (array.length === 0) return null;

    const mid = Math.floor(array.length / 2);
    const root = new Node(array[mid]);

    root.left = this.buildTree(array.slice(0, mid));
    root.right = this.buildTree(array.slice(mid + 1));

    return root;
  }

  includes(value, node = this.root) {
    if (!node) return false;
    if (node.data === value) return true;

    return value < node.data
      ? this.includes(value, node.left)
      : this.includes(value, node.right);
  }

  insert(value, node = this.root) {
    if (!node) return new Node(value);

    if (value === node.data) return node;

    if (value < node.data) {
      node.left = this.insert(value, node.left);
    } else {
      node.right = this.insert(value, node.right);
    }

    return node;
  }

  deleteItem(value, node = this.root) {
    if (!node) return null;

    if (value < node.data) {
      node.left = this.deleteItem(value, node.left);
    } else if (value > node.data) {
      node.right = this.deleteItem(value, node.right);
    } else {
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      let minNode = this.findMin(node.right);
      node.data = minNode.data;
      node.right = this.deleteItem(minNode.data, node.right);
    }

    return node;
  }

  findMin(node) {
    while (node.left) node = node.left;
    return node;
  }

  levelOrderForEach(callback) {
    if (!callback) throw new Error("Callback required");

    const queue = [this.root];

    while (queue.length > 0) {
      const node = queue.shift();
      callback(node.data);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  inOrderForEach(callback, node = this.root) {
    if (!callback) throw new Error("Callback required");
    if (!node) return;

    this.inOrderForEach(callback, node.left);
    callback(node.data);
    this.inOrderForEach(callback, node.right);
  }

  preOrderForEach(callback, node = this.root) {
    if (!callback) throw new Error("Callback required");
    if (!node) return;

    callback(node.data);
    this.preOrderForEach(callback, node.left);
    this.preOrderForEach(callback, node.right);
  }

  postOrderForEach(callback, node = this.root) {
    if (!callback) throw new Error("Callback required");
    if (!node) return;

    this.postOrderForEach(callback, node.left);
    this.postOrderForEach(callback, node.right);
    callback(node.data);
  }

  find(value, node = this.root) {
    if (!node) return null;
    if (node.data === value) return node;

    return value < node.data
      ? this.find(value, node.left)
      : this.find(value, node.right);
  }

  getHeight(node) {
    if (!node) return -1;

    return 1 + Math.max(
      this.getHeight(node.left),
      this.getHeight(node.right)
    );
  }

  height(value) {
    const node = this.find(value);
    if (!node) return undefined;
    return this.getHeight(node);
  }

  depth(value, node = this.root, depth = 0) {
    if (!node) return undefined;
    if (node.data === value) return depth;

    return value < node.data
      ? this.depth(value, node.left, depth + 1)
      : this.depth(value, node.right, depth + 1);
  }

  isBalanced(node = this.root) {
    if (!node) return true;

    const left = this.getHeight(node.left);
    const right = this.getHeight(node.right);

    if (Math.abs(left - right) > 1) return false;

    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }

  rebalance() {
    const values = [];
    this.inOrderForEach(v => values.push(v));
    this.root = this.buildTree(values);
  }
}

// Helper function
function randomArray(size = 10, max = 100) {
  return Array.from({ length: size }, () =>
    Math.floor(Math.random() * max)
  );
}

// Driver code
const tree = new Tree(randomArray());

console.log("Balanced:", tree.isBalanced());

console.log("Level Order:");
tree.levelOrderForEach(v => console.log(v));

console.log("Pre Order:");
tree.preOrderForEach(v => console.log(v));

console.log("Post Order:");
tree.postOrderForEach(v => console.log(v));

console.log("In Order:");
tree.inOrderForEach(v => console.log(v));

// Unbalance
tree.insert(200);
tree.insert(300);
tree.insert(400);

console.log("Balanced after insert:", tree.isBalanced());

// Rebalance
tree.rebalance();

console.log("Balanced after rebalance:", tree.isBalanced());