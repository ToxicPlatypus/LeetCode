# @param {Integer[]} nums
# @return {Integer}
def max_product(nums)
  result = nums[0]
  prefix = suffix = 1

  for i in 0..nums.length-1
    prefix = 1 if prefix == 0
    suffix = 1 if suffix ==0

    prefix = prefix * nums[i]
    suffix = suffix * nums[nums.length-i-1]

    result = [result, prefix, suffix].max
  end
  result
end