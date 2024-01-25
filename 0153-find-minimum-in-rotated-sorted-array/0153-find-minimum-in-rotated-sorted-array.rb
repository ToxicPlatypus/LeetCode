# @param {Integer[]} nums
# @return {Integer}
def find_min(nums)
  low = 0
  high = nums.length - 1
  result = nums[0]
  while low < high
    return nums[low] if nums[low] <= nums[high]
    mid = (low + high) / 2
    if nums[mid] >= nums[low]
      low = mid + 1
    else
      high = mid
    end
  end
  return nums[low]
end
