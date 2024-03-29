// What are Stacks & Queues
// They are both abstract and linear data structures
// They allow us to traverse through the data strucure one by one

// STACKS
// Stacks abide by the LIFO (Last In First Out) principle
// The last element added to the stack will be the first element removed from the stack
// Use-cases
// 1. Managing function invocations
// 2. Undo/Redo things -> undo the "LAST" action
// 3. Routing (History) is treated like a stack

//BiG O notation of Stacks
// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)

// Implement Stacks using Linked Lists
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	// Pushing Psuedocode
	// The function should accept a value
	// Create a new node with that value
	// If there are no nodes in the stack, set the first and last property to be the newly created node
	// If there is at least one node, create a variable that stores the current first property on the stack
	// Reset the first property to be the newly created node
	// Set the next property on the node to be the previously created variable
	// Increment the size of the stack by 1
	push(val) {
		let newNode = new Node(val);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			var temp = this.first;
			this.first = newNode;
			this.first.next = temp;
		}
		return ++this.size;
	}

	// 	If there are no nodes in the stack, return null
	// Create a temporary variable to store the first property on the stack
	// If there is only 1 node, set the first and last property to be null
	// If there is more than one node, set the first property to be the next property on the current first
	// Decrement the size by 1
	// Return the value of the node removed
	pop() {
		if (!this.first) return null;
		let temp = this.first;
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;
		return temp.value;
	}
}
