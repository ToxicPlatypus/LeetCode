# @param {Integer[]} nums
# @return {Integer[][]}
def permute(nums)
  result = []
  backtrack(nums, result, [])
  result
end

def backtrack(nums, result, temp)
  if(temp.length == nums.length)
    result << temp.dup
  end

  nums.each do |n|
    next if temp.include? n
    temp << n
    backtrack(nums, result, temp)
    temp.pop
  end
end
