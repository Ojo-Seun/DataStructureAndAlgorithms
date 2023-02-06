"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BinarySearchTree = exports.Node = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this.obj = {};
        this.frontPointer = 0;
        this.rearPointer = 0;
        this.size = 0;
    }
    Queue.prototype._isEmpty = function () {
        return this.size === 0;
    };
    Queue.prototype.enQueue = function (value) {
        if (this._isEmpty()) {
            this.obj[0] = value;
            this.frontPointer = 0;
            this.rearPointer = 1;
        }
        else {
            this.obj[this.rearPointer] = value;
            this.rearPointer++;
        }
        this.size++;
    };
    Queue.prototype.deQueue = function () {
        if (this._isEmpty())
            return null;
        var value = this.obj[this.frontPointer];
        delete this.obj[this.frontPointer];
        this.frontPointer++;
        this.size--;
        return value;
    };
    return Queue;
}());
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
    return Node;
}());
exports.Node = Node;
var BinarySearchTree = /** @class */ (function (_super) {
    __extends(BinarySearchTree, _super);
    function BinarySearchTree() {
        var _this = _super.call(this) || this;
        _this.arr = [];
        _this.root = null;
        return _this;
    }
    BinarySearchTree.prototype.isEmpty = function () {
        return this.root === null;
    };
    BinarySearchTree.prototype.insert = function (value) {
        var newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    };
    BinarySearchTree.prototype.insertNode = function (root, newNode) {
        if (newNode.value < root.value) {
            if (root.leftChild === null) {
                root.leftChild = newNode;
            }
            else {
                this.insertNode(root.leftChild, newNode);
            }
        }
        else {
            if (root.rightChild === null) {
                root.rightChild = newNode;
            }
            else {
                this.insertNode(root.rightChild, newNode);
            }
        }
    };
    BinarySearchTree.prototype.search = function (root, value) {
        if (!root) {
            return false;
        }
        else {
            if (root.value === value) {
                return true;
            }
            else {
                if (root.value > value) {
                    return this.search(root.leftChild, value);
                }
                else {
                    return this.search(root.rightChild, value);
                }
            }
        }
    };
    // DFS
    BinarySearchTree.prototype.preOrder = function (root) {
        if (root) {
            this.arr.push(root.value);
            this.preOrder(root.leftChild);
            this.preOrder(root.rightChild);
        }
        return this.arr;
    };
    BinarySearchTree.prototype.inOrder = function (root) {
        if (root) {
            this.inOrder(root.leftChild);
            this.arr.push(root.value);
            this.inOrder(root.rightChild);
        }
        return this.arr;
    };
    BinarySearchTree.prototype.postOrder = function (root) {
        if (root) {
            this.postOrder(root.leftChild);
            this.postOrder(root.rightChild);
            this.arr.push(root.value);
        }
        return this.arr;
    };
    //
    //BFS
    BinarySearchTree.prototype.levelOrder = function () {
        this.enQueue(this.root);
        while (this.size) {
            var cur = this.deQueue();
            console.log(cur === null || cur === void 0 ? void 0 : cur.value);
            if (cur === null || cur === void 0 ? void 0 : cur.leftChild) {
                this.enQueue(cur.leftChild);
            }
            if (cur === null || cur === void 0 ? void 0 : cur.rightChild) {
                this.enQueue(cur.rightChild);
            }
        }
    };
    BinarySearchTree.prototype.min = function (root) {
        if (!root.leftChild) {
            return root.value;
        }
        return this.min(root.leftChild);
    };
    BinarySearchTree.prototype.max = function (root) {
        if (!root.rightChild) {
            return root.value;
        }
        return this.max(root.rightChild);
    };
    BinarySearchTree.prototype.display = function () {
        console.log(this.root);
    };
    return BinarySearchTree;
}(Queue));
exports.BinarySearchTree = BinarySearchTree;
var bst = new BinarySearchTree();
bst.insert(10);
bst.insert(20);
bst.insert(9);
bst.insert(15);
bst.insert(3);
console.log(bst.min(bst.root), bst.max(bst.root));
