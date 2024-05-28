class Queue
  def initialize
    @elements = []
  end

  def push(value)
    @elements << value
  end

  def peek
    empty? ? nil : @elements[0]
  end

  def pop
    @elements.shift unless empty?
  end

  def size
    @elements.length
  end

  def empty?
    @elements.length == 0
  end
end


class MyStack
  attr_reader :queue1, :queue2

  def initialize()
    @queue1 = Queue.new
    @queue2 = Queue.new
  end

  def push(x)
     while !queue1.empty?
       queue2.push(queue1.pop)
     end
     
     queue1.push(x)

     while !queue2.empty?
      queue1.push(queue2.pop)
     end
  end

  def pop()
     queue1.pop
  end

  def top()
    queue1.peek
  end

  def empty()
    @queue1.empty? && @queue2.empty?
  end
end