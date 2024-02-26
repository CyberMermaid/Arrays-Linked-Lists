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
    } 
    else{
      newNode.next = this.head;
      this.head = newNode;
      return newNode;
    }
  }

  // javascript Throws error if list is empty.
  /** pop(): return & remove last item. */

  pop() {
    // If the list is empty
    if(!this.head){
      this.head = null
      this.tail = null
      return null;
    }
    // if only one node is in the list
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
    // Check if the linked list is empty
    if(!this.head){
      return null;
    }

    let currentNode = this.head;
    let count = 0;
      
      // Traverse linked list until the node at the idx has been reached
    while(currentNode!==null && count<= idx){
    // When the index has been reached, return the value of the node at the specified index
        if (count === idx) {
              return currentNode.value;
            }    
        //increment counter and update currentNode 
        count++;
        currentNode = currentNode.next; 
  }
    return null;
  }

  /** setAt(idx, val): set val at idx to val */
  setAt(idx, val) {
    if (idx <0 || idx >= this.length) { 
      throw new Error("Index out of bounds!");
     }
    let currentNode = this.head;
    for(let i=0;i< idx; i++){
      currentNode= currentNode.next;
    }
    currentNode.value = val;
    return currentNode.value;
  }

  /** insertAt(idx, val): add node w/val before idx. */
  insertAt(idx, val) {
    if (idx <0 || idx > this.length) { 
      throw new Error("invalid index!");
     }
    
    // Create a node with the given value
    let addedNode = new Node(val);

    // Check if Linked list is empty or if you're inserting at the head.
    if (!this.head || idx ===0 ){
      addedNode.next = this.head;
      this.head = addedNode;
      // Increment length of linked list
      this.length++;
      return null; 
    }

   // traverse to the node before desired insertion point
    let previousNode = this.head;
    for(let i = 0; i<idx; i++){
      previousNode = previousNode.next;
      }
    addedNode.next = previousNode.next;
    previousNode.next = addedNode;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */
  removeAt(idx) { 

    // First check if index is valid
    if (idx <0 || idx > this.length) { 
      throw "invalid index!"; }

    // Check if Linked list is empty
    if (!this.head){
      return null;
    }

    // Remove headnode if index is 0.
    if (idx === 0){
      let removedNode = this.head;
      this.head = this.head.next;
      // Update the length of the list
      this.length--; 
      return removedNode;
    }

    let currentNode = this.head;
    
    // traverse through linked list before node at index
    for(let i = 0; i<idx; i++){
      currentNode = currentNode.next;
    }
      
    // Ensure that the node to be removed exists
    if (!currentNode.next) {
      throw "Node does not exist!";
    }
    // Update removedNode
    removedNode = currentNode.next;      
    // Unlink the deleted node from list
    currentNode.next = currentNode.next.next;
    // Update the length of the list
    this.length --; 
    return removedNode;
  }

  /** average(): return an average of all values in the list */
  average() {
    let count=0 , sum = 0;
    
     // If the list is empty
     if(!this.head){
        return null;
     }
     let currentNode= this.head;
     //Traverse through linked list
     while(currentNode !== null){
        sum += currentNode.value;
        count++;
        currentNode = currentNode.next;
      }
      // Calculate and return average
      let avg = sum/count;
      return Number(avg.toPrecision(4));
  }
}

module.exports = LinkedList;
