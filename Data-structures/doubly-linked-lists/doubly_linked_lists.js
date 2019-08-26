// Doubly Linked list
//Basically we add a pointer to the previous node and the next node
//Each node points in to directions
//Almost identical to the singly lists , except that every node has another pointer, to the previous node
// no random access
//Uses more memore relative to singly lists lists
class Node {
	constructor(val) {
		this.val = val;
		this.head = null;
		this.tail = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	// Push -> Adds a new node at the end of the list
	// Create a new node with the value passed it
	// IF the head property is null, set the head and tail to be this node
	// otherwise, set the next property on the tail to be that node
	//
}
