# frozen_string_literal: true

# Singly Linked Lists
# WHat is a linked list?
# It is a data structure that holds all kinds of Objects (Strings, arrays) etc
# It is ordered just arrays
# In arrays, the items are order using indices/numbers
# whereas in lists, it contains a bunch of elements with no indices who are just
#  pointing to the next element
# there is no index --> we can't say give me the 1st thing
# A list contains a bunch of nodes
# A Node stores a piece of data and also reference the next node
# if there is no next node, it references null
# There are three properties that we keep track of :
# Head -> It's the beginning of the list
# Tail -> It's the end of the list
# Length -> We keep track of the length
# In lists, Random access is not allowed as no index exists

# BIG O Notation
# Insertion -> O(1)
# Either push it at the beginning or the end
# Removal -> Depends
#   If from beginning -> O(1)
#   else O(N)
# Searching - O(N)
# Access - O(N)
# They excel at insertion in the beginingg or the end. and you don't care about
#  the order or random access

# Node class
class Node
  attr_accessor :val
  attr_accessor :next
  def initialize(val)
    @val = val
    @next = null
  end
end

# LinkedList
class LinkedList
  attr_accessor :head
  attr_accessor :tail
  attr_accessor :length

  def initialize
    @head = nil
    @tail = nil
    @length = 0
  end

  # Push -> Adds a val to the end of the list
  # The function accepts a value
  # Create a node using the value passed
  # If there is no head property, set the head AND the tail to be the newly
  # created node
  # Otherwise, set the next property on the tail to be the new node and
  # set the tail property on the list to be the newly created node
  # increment the length by 1
  def push(val)
    new_node = Node.new(val)
    if head.nil?
      self.head = new_node
      self.tail = head
    else
      tail.next = new_node
      self.tail = new_node
    end
    self.length += 1
    self
  end

  # Pop -> Takes the value out from the end of the list and returns it to us
  # It doesn't take any value
  # If there are no nodes, return nil (If no head or length=0)
  # Loop through the entire list until you reach the tail
  # We're trying to get the value right before the tail (Second to last value)
  # Keep track of what the last item was
  # set the next property of the 2nd to last node to null
  # set the tail to be the second to last node
  # decrement one from the length
  # Return the removed node
  def pop
    return nil if head.nil?

    current = head
    previous = current
    while current.next
      previous = current
      current = current.next
    end
    tail = previous
    tail.next = nil
    length -= 1
    if length.zero?
      self.head = nil
      self.tail = nil
    end
    current
  end

  # shift() -> Removes a note from the beginning of the linked list
  # If there are no nodes return nil
  # store the current head property in a variable
  # set the head property to be the current head's next property
  # Decrement the length by 1
  # return the value of the node removed
  def shift
    return nil if head.nil?

    current_head = head
    self.head = current_head.next
    self.length -= 1
    self.tail = nil if this.length.zero?
    current_head
  end

  # unshift -> adds a new item/node to the start of the list
  # This function should accept a value
  # Create a new node value using the value passed in the function
  # If there is no head property, set the head and tail to newly created node
  # Otherwise, set the newly created node's next property to be the current head
  # set the head property on the list to be that of the newly created node
  # increment by 1
  # return the list
  def unshift(val)
    new_node = Node.new(val)
    if head.nil?
      self.head = new_node
      self.tail = head
    else
      new_node.next = this.head
      this.head = new_node
    end
    self.length += 1
    self
  end

  # get -> Returns a value at a defined index (starting at 0)
  # It should accept an index
  # if the index is less than zero or greater than or equal to the length of the
  # list, return null
  # loop through the list until you reach the index and return the node at index
  def get(index)
    return nil if index.negative? || index >= this.length

    counter = 0
    current = head
    while counter != index
      current = current.next
      counter += 1
    end
    current
  end

  # set -> Change the value of the node based on it's position in the list
  # Accepts an index and a value
  # Use the get method to find the node
  # If not found return false
  # If it is found, set the value of that node to be the value passed in the func
  # and return true
  def set(index, val)
    found_node = get(index)
    if found_node.nil?
      return false
    else
      found_node.val = val
      return true
    end
  end

  # Insert -> Adding a value at a specified index
  # Unlike set, it inserts it at that index instead of updating an existing node
  # If the index is less than 0 or greater than the length, return false
  # If the index is same at the length, insert the value/node at the end of list
  # If the index is at 0, unshift a new new node to the start of the list
  # otherwise, using the get method, access the node at the index of -1
  # set the next property on that node to be the new node
  # set the next property on the new node to be the previous next
  # increment the length
  # return true
  def insert(index, val)
    return nil if index.negative? || index >= length

    if index == self.length
      push(val)
      return true
    end
    if index.zero?
      unshift(val)
      return true
    end
    new_node = Node.new(val)
    previous_node = get(index - 1)
    temp = previous_node.next
    previous_node.next = new_node
    new_node.next = temp
    self.length += 1
    true
  end

  # Remove -> It takes it an index and remove the value at that index. It patches up the list around it
  # If the index is greater than zero or greater than the length, return null
  # IF the index is the same as the length - 1,last item > Pop
  # If the index is 0, use the shift method
  # otherwise, using the get method, access the node at the index at -1,
  # Then set the next property of the previous code to be the next of the next node
  # decrement the length
  def remove(index)
    return nil if index.negative? || index >= length
    return shift if index.zero?
    return pop(index) if index == self.length - 1

    previous_node = get(index - 1)
    removed = previous_node.next
    previous_node.next = removed.next
    self.length -= 1
    removed
  end

end

