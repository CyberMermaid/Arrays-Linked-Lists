/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if(this.head === null){
      this.head = newNode;
    }
    else if (this.tail !== null){
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if(this.head === null){
      this.head = newNode;
      return this.head;
    } else{
      newNode.next = this.head;
      this.head = newNode;
      return newNode;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if(!this.head){
      this.head = null
      this.tail = null
      return null;
    }
    // if only one node in the list
    else if(!this.head.next){
      let lastNode = this.head;
      this.head = null;
      this.tail = null;
      return lastNode;
    }
    let previous = this.head;
    let tail = this.head; 

    while (tail.next){
      previous = tail;
      tail = tail.next;
    }
    previous.next = null;
    this.tail = previous;

    return tail;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head){
      let shiftedVal = this.head.val;
      // Set head to the next node
      this.head = this.head.next;

      // If the list is now empty, set the tail to null
         if (!this.head){
          this.tail = null;
        }
    // Decrement the length of the list
    this.length--;

    return shiftedVal;
    }
    return null;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

module.exports = LinkedList;
