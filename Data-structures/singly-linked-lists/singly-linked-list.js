// Singly Linked Lists
// WHat is a linked list?
// It is a data structure that holds all kinds of Objects (Strings, arrays, numbers) etc
// It is ordered just arrays
// In arrays, the items are order using indices/numbers
// whereas in lists, it contains a bunch of elements with no indices who are just pointing to the next element
// there is no index --> we can't say give me the 1st thing
// A list contains a bunch of nodes
// A Node stores a piece of data and also reference the next node
// if there is no next node, it references null
// There are three properties that we keep track of :
// Head -> It's the beginning of the list
// Tail -> It's the end of the list
// Length -> We keep track of the length
// In lists, Random access is not allowed as no index exists

// BIG O Notation
// Insertion -> O(1)
// Either push it at the beginning or the end
// Removal -> Depends
//   If from beginning -> O(1)
//   else O(N)
// Searching - O(N)
// Access - O(N)
// They excel at insertion in the beginingg or the end. and you don't care about the order or random access

// piece of data - val
//reference to next node - next
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	// Push -> Adds a val to the end of the list
	// The function accepts a value
	// Create a node using the value passed
	// If there is no head property, set the head AND the tail to be the newly created node
	// Otherwise, set the next property on the tail to be the new node and
	// set the tail property on the list to be the newly created node
	// increment the length by 1
	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	// Pop -> Takes the value out from the end of the list and returns it to us
	// It doesn't take any value
	// If there are no nodes, return undefined (If no head or length=0)
	// Loop through the entire list until you reach the tail
	// We're trying to get the value right before the tail (Second to last value)
	// Keep track of what the last item was
	// set the next property of the 2nd to last node to null
	// set the tail to be the second to last node
	// decrement one from the length
	// Return the removed node
	pop() {
		if (!this.head) return undefined;
		let current = this.head;
		let newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}

	// shift() -> Removes a note from the beginning of the linked list
	// If there are no nodes return undefined
	// store the current head property in a variable
	// set the head property to be the current head's next property
	// Decrement the length by 1
	// return the value of the node removed
	shift() {
		if (!this.head) return undefined;
		let currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return currentHead;
	}

	// unshift -> adds a new item/node to the start of the list
	// This function should accept a value
	// Create a new node value using the value passed in the function
	// If there is no head property, set the head and tail to the newly created node
	// Otherwise, set the newly created node's next property to be the current head property
	// set the head property on the list to be that of the newly created node
	// increment by 1
	// return the list
	unshift() {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	// get -> Returns a value at a defined index (starting at 0)
	// It should accept an index
	// if the index is than zero or greater than or equal to the length of the list, return null
	// loop through the list until you reach the index and return the node at that index
	get(index) {
		if (index < 0 || index >= this.length) return null;
		let counter = 0;
		let current = this.head;
		while (counter != index) {
			current = current.next;
			counter++;
		}
		return current;
	}

	// set -> Change the value of the node based on it's position in the list
	// Accepts an index and a value
	// Use the get method to find the node
	// If not found return false
	// If it is found, set the value of that node to be the value passed in the function and return true
	set(index, val) {
		let foundNode = this.get(index);
		if (foundNode) {
			foundNode.val = val;
			return true;
		} else {
			return false;
		}
	}

	// Insert -> Adding a value at a specified index
	// Unlike set, it inserts it at that index instead of updating an existing node
	// If the index is less than 0 or greater than the length, return false
	// If the index is same at the length, insert the value/node at the end of the list
	// If the index is at 0, unshift a new new node to the start of the list
	// otherwise, using the get method, access the node at the index of -1
	// set the next property on that node to be the new node
	// set the next property on the new node to be the previous next
	// increment the length
	// return true
	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) {
			this.push(val);
			return true;
		}
		if (index === 0) {
			this.unshift(val);
			return true;
		}
		let newNode = new Node(val);
		let previous = this.get(index - 1);
		let temp = previous.next;
		previous.next = newNode;
		newNode.next = temp;
		this.length++;
		return true;
	}

	// Remove -> It takes it an index and remove the value at that index. It patches up the list around it
	// If the index is greater than zero or greater than the length, return null
	// IF the index is the same as the length - 1,last item > Pop
	// If the index is 0, use the shift method
	// otherwise, using the get method, access the node at the index at -1,
	// Then set the next property of the previous code to be the next of the next node
	// decrement the length
	remove(index) {
		if (index < 0 || index >= this.length) return null;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();
		let previousNode = this.get(index - 1); //retreive the node 1 before the one we are trying to remove
		let removed = previousNode.next;
		previousNode.next = removed.next;
		this.length--;
		return removed;
	}

	// THIS is for practise for only
	// Reverse -> reverse the linked list in place
	// Swap the head and tail
	// create a variable for next
	// another one called previous
	// a variable called head and initialize it to the start of the head
	// loop through the list
	// set next to be the next property on whatevr the current node is
	// Set the next property to be the node to be what the previous is
	// set prev to be the value of the node variable
	// set the node variable to be the value ofthe next variable
	reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		let next;
		let prev = null;
		for (let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
		return this;
	}
	print() {
		let arr = [];
		let current = this.head;
		while (current) {
			arr.push(current.val);
			current = current.next;
		}
		console.log(arr);
	}
}
