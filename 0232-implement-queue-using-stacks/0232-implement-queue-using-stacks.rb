class MyQueue
  def initialize()
    @input = []
    @output = []
  end

  def push(x)
    @input << x  
  end

  def pop()
    if @output.empty?
      while !@input.empty?
        @output << @input.pop
      end
    end
    @output.pop
  end

  def peek()
    if @output.empty?
      while !@input.empty?
        @output << @input.pop
      end
    end
    @output.last
  end

  def empty()
    @input.empty? && @output.empty?  
  end
end