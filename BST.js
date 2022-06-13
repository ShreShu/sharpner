class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //insert node
  insert(data) {
    var newNode = new Node(data);
    //If BST is empty and this is the first element
    if (this.root === null) {
      this.root = newNode;
    } else {
      // BST is not empty, find the correct place to be added
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    //insertion in  left BST
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left === newNode;
      } else {
        //Go ahead checking with childrens of left node
        this.insertNode(node.left, newNode);
      }
    }
    //insertion in  right BST
    else {
      if (node.data > newNode.data) {
        if (node.right === null) {
          node.right === newNode;
        } else {
          this.insert(node.right, newNode);
        }
      }
    }
  }

  //Search
  search(data) {
    let element = this.searchNode(this.root, data);
    if (element) {
      return `${element} found!`;
    } else {
      return `No element found`;
    }
  }
  searchNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.searchNode(node.left, data);
    } else if (data > node.data) {
      return this.searchNode(node.right, data);
    } else {
      return node;
    }
  }
findMinNode(node);
{
  // if left of a node is null
  // then it must be minimum node
  if (node.left === null) return node;
  else return this.findMinNode(node.left);
}

findMinNode(node);
{
  // if left of a node is null
  // then it must be minimum node
  if (node.left === null) return node;
  else return this.findMinNode(node.left);
}
}

var BST = new BinarySearchTree();
// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
