# @param {Integer[]} nums
# @return {Integer[]}
def majority_element(nums)
  elements = Hash.new(0)
  result = []
  min = nums.length / 3
  nums.each do |n|
    elements[n] += 1
  end

  elements.each do |key, value|
    if value > min
      result.push(key)
    end
  end
  result
end