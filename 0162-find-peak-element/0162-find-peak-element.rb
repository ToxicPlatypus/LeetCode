def find_peak_element(nums)
  low = 0
  high = nums.length - 1
  return 0 if nums.length == 1
  return 0 if nums[0] > nums[1]
  return nums.length - 1 if nums[high] > nums[high - 1]

  while low <= high
    mid = (low + high) / 2
    if nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]
      return mid
    elsif nums[mid] < nums[mid - 1]
      high = mid - 1
    else
      low = mid + 1
    end
  end
end