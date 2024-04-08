class Stack {
  constructor() {
    this.items = [];
  }

  add(element) {
    return this.items.push(element);
  }

  //   view the last element
  peek() {
    return this.items[this.items.length - 1];
  }

  pop() {
    return this.items.pop();
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  empty() {
    this.items = [];
  }
}

let stack = new Stack();
stack.add(1);
stack.add(11);
stack.add(111);
stack.add(1111);

stack.pop();
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.peek());
console.log(stack);
