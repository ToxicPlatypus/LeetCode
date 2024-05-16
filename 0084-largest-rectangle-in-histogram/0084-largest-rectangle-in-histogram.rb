# @param {Integer[]} heights
# @return {Integer}
def largest_rectangle_area(heights)
    result = 0
    pre_smaller_arr = previous_smaller(heights)
    next_smaller_arr = next_smaller(heights)

    heights.each_with_index do |height, index|
        curr = (next_smaller_arr[index] - pre_smaller_arr[index] - 1) * height
        result = [result, curr].max
    end
    result
end

def previous_smaller(heights)
    pre_smaller_arr = []
    stack = []

    heights.each_with_index do |h, i|
        while !stack.empty? && heights[stack.last] >= h
          stack.pop
        end

        if stack.empty?
            pre_smaller_arr.push(-1)
        else
            pre_smaller_arr.push(stack.last)
        end

        stack.push(i)
    end

    pre_smaller_arr
end

def next_smaller(heights)
    next_smaller_arr = []
    stack = []

    heights.to_enum.with_index.reverse_each do |h, i|
        while !stack.empty? && heights[stack.last] >= h
          stack.pop
        end

        if stack.empty?
            next_smaller_arr.push(heights.length)
        else
            next_smaller_arr.push(stack.last)
        end

        stack.push(i)
    end

    next_smaller_arr.reverse
end