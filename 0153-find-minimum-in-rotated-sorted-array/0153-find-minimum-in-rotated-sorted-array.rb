def find_min(nums)
  low = 0
  high = nums.length - 1
  result = nums[0]

  while low <= high
    mid = (low + high) / 2

    if nums[mid] > nums[high]
      low = mid + 1
    else
      result = [result, nums[mid]].min
      high = mid - 1
    end
  end

  result
end