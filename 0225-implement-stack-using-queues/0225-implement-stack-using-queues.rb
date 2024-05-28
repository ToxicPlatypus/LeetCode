class MyStack
  def initialize()
    @queue = []
  end

  def push(x)
    @queue << x

    for i in 0...(@queue.length - 1)
      @queue << @queue.shift
    end

  end

  def pop()
    @queue.shift
  end

  def top()
    @queue[0]
  end

  def empty()
    @queue.empty?
  end
end