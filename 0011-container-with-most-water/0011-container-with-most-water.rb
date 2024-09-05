# @param {Integer[]} height
# @return {Integer}
def max_area(height)
    result = 0
    left = 0
    right = height.length - 1

    while left < right
      temp = [height[left], height[right]].min * (right - left)
      result = [result, temp].max

      if height[left] > height[right]
        right = right - 1
      else
        left = left + 1
      end
    end

    result
end