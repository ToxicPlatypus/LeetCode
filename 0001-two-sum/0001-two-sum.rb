# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
  hash = {}
  nums.each_with_index { |num, index| hash[num] = index}

  nums.each_with_index do |number, index|
    diff = target - number
    if hash[diff] && hash[diff] != index
      return [index, hash[diff]]
    end
  end
end