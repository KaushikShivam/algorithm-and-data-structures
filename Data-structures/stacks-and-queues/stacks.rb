# frozen_string_literal: true

class Node
  attr_accessor :val
  attr_accessor :next

  def initialize(val)
    @val = val
    @next = nil
  end
end

class Stack
  attr_accessor :first
  attr_accessor :last
  attr_accessor :size
  def initialize
    @first = nil
    @last = nil
    @size = 0
  end

  # Pushing Psuedocode
  # The function should accept a value
  # Create a new node with that value
  # If there are no nodes in the stack, set the first and last property to be the newly created node
  # If there is at least one node, create a variable that stores the current first property on the stack
  # Reset the first property to be the newly created node
  # Set the next property on the node to be the previously created variable
  # Increment the size of the stack by 1
  def push(val)
    new_node = Node.new(val)
    if size.zero?
      self.first = new_node
      self.last = new_node
    else
      temp = first
      self.first = new_node
      first.next = temp
    end
    size += 1
    size
  end

  #   If there are no nodes in the stack, return null
  # Create a temporary variable to store the first property on the stack
  # If there is only 1 node, set the first and last property to be null
  # If there is more than one node, set the first property to be the next property on the current first
  # Decrement the size by 1
  # Return the value of the node removed
  def pop
    return nil if size.zero?

    temp = first
    self.last = nil if first == last
    self.first = first.next
    self.size -= 1
    temp.val
  end
end
