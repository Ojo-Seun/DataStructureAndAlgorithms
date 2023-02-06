
interface NodeTypes{
    value: number,
    leftChild: null | NodeTypes,
    rightChild: null|NodeTypes
}


class Queue{
  private obj:{} | NodeTypes
  private frontPointer:number
  private rearPointer:number
   size:number

  constructor() {
    this.obj= {}
    this.frontPointer = 0
    this.rearPointer = 0
    this.size = 0
  }

  private _isEmpty(){
    return this.size === 0
  }

  enQueue(value:number | NodeTypes | null){
      if(this._isEmpty()){
        this.obj[0] = value
        this.frontPointer = 0
        this.rearPointer = 1

      }else{
        this.obj[this.rearPointer] = value
        this.rearPointer++
      }

      this.size++
  }

  deQueue(){
    if(this._isEmpty()) return null
    let value = this.obj[this.frontPointer]
    delete this.obj[this.frontPointer]
    this.frontPointer++
    this.size--
    return value

  }

}

export class Node{
    value:NodeTypes["value"]
    leftChild:NodeTypes["leftChild"]
    rightChild: NodeTypes["rightChild"]
  

    constructor(value:number) {
        this.value = value
        this.leftChild = null
        this.rightChild = null
    
}
}


export class BinarySearchTree extends Queue {
  root: null | NodeTypes;
  arr: number[] = [];

  constructor() {
    super()
    this.root = null;
  }

  private isEmpty(): boolean {
    return this.root === null;
  }

  insert(value: number): void {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.leftChild === null) {
        root.leftChild = newNode;
      } else {
        this.insertNode(root.leftChild, newNode);
      }
    } else {
      if (root.rightChild === null) {
        root.rightChild = newNode;
      } else {
        this.insertNode(root.rightChild, newNode);
      }
    }
  }

  search(root, value: number) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else {
        if (root.value > value) {
          return this.search(root.leftChild, value);
        } else {
          return this.search(root.rightChild, value);
        }
      }
    }
    }
    
    // DFS
  preOrder(root) {
    if (root) {
      this.arr.push(root.value);
      this.preOrder(root.leftChild);
      this.preOrder(root.rightChild);
    }

    return this.arr;
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.leftChild);
      this.arr.push(root.value);
      this.inOrder(root.rightChild);
    }
    return this.arr;
  }

  postOrder(root) {
    if (root) {
        this.postOrder(root.leftChild);
        this.postOrder(root.rightChild);
        this.arr.push(root.value);
    }
    return this.arr;
    }
    //

    //BFS
  
  levelOrder() {

    this.enQueue(this.root)

    while (this.size) {
      let cur = this.deQueue()
      console.log(cur?.value)

      if (cur?.leftChild) {
        this.enQueue(cur.leftChild)
      }

      if (cur?.rightChild) {
        this.enQueue(cur.rightChild)
      }

    
    }

    
  }


  min(root) {
    if (!root.leftChild) {
      return root.value
    }
    return this.min(root.leftChild)
  }


  max(root) {
    if (!root.rightChild) {
      return root.value
    }

    return this.max(root.rightChild)
  }

  display() {
    console.log(this.root);
  }
}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(20)
bst.insert(9)
bst.insert(15)
bst.insert(3)
console.log(bst.min(bst.root), bst.max(bst.root))