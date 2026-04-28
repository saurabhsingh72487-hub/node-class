# 🌳 Binary Search Tree (BST) Implementation

This project implements a **Binary Search Tree (BST)** in JavaScript with full functionality including insertion, deletion, traversal, balancing, and more.

---

## 🚀 Features

* Build a **balanced BST** from an array
* Insert and delete nodes
* Search values (`includes`)
* Tree traversals:

  * Level Order (BFS)
  * In Order
  * Pre Order
  * Post Order
* Find:

  * Height of a node
  * Depth of a node
* Check if tree is balanced
* Rebalance an unbalanced tree

---

## 📁 Project Structure

```
.
├── index.js   # Main BST implementation
└── README.md  # Project documentation
```

---

## 🛠️ Usage

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Run the code

```bash
node index.js
```

---

## 📌 Example

```js
const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3]);

console.log(tree.isBalanced()); // true

tree.insert(100);
tree.insert(200);

console.log(tree.isBalanced()); // false

tree.rebalance();

console.log(tree.isBalanced()); // true
```

---

## 🔄 Traversals

```js
tree.levelOrderForEach(v => console.log(v));
tree.inOrderForEach(v => console.log(v));
tree.preOrderForEach(v => console.log(v));
tree.postOrderForEach(v => console.log(v));
```

---

## ⚖️ Balance Logic

A tree is considered balanced if:

* The height difference between left and right subtree of every node is ≤ 1
* Both subtrees are also balanced

---

## 📚 Concepts Covered

* Binary Search Trees
* Recursion
* Tree Traversals (DFS & BFS)
* Data Structures & Algorithms
* Time Complexity Optimization (O(log n))

---

## 🧠 Learning Goal

This project is designed to strengthen understanding of:

* Tree data structures
* Recursive problem solving
* Efficient data manipulation

---

## 📌 Author

Your Name

---

## ⭐ Contribute

Feel free to fork this repo and improve the implementation!

---

## 📄 License

This project is open-source and available under the MIT License.
