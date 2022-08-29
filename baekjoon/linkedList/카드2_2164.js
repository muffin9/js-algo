const fs = require('fs');
const input = fs.readFileSync('카드2_2164.txt').toString().trim();

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this._size = 0;
    }
  
    add(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
      }
  
      this.tail = newNode;
      this._size++;
  
      return newNode;
    }
  
    getHead() {
      return this.head.value;
    }
  
    removeHead() {
      this.head = this.head.next;
      this.head.prev = null;
      this._size--;
    }
  
    getSize() {
      return this._size;
    }
  }

const solution = () => {
    const N = +input;
    
    const cards = new LinkedList();

    for(let i = 1; i <= N; i++) {
        cards.add(i);
    }

    while (cards.getSize() !== 1) {
        cards.removeHead();
        cards.add(cards.getHead());
        cards.removeHead();
    }

    console.log(cards.getHead());
}

solution();