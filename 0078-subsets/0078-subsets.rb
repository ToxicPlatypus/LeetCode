# @param {Integer[]} nums
# @return {Integer[][]}
def subsets(nums)
    result = []
    temp = []
    backtrack(result, temp, nums, 0)
    result
end

def backtrack(result, temp, nums, start)
  result << temp.dup
  
  for i in start..nums.length-1
    temp << nums[i]
    backtrack(result, temp, nums, i+1)
    temp.pop
  end
end