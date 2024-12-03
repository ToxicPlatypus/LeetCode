# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def search_range(nums, target)
    result = [-1, -1]
    start = binary_search(nums, target, true)
    stop = binary_search(nums, target, false)

    result[0] = start
    result[1] = stop

    result
end

def binary_search(nums, target, find_start_index)
    ans = -1
    start = 0
    stop = nums.length - 1
    
    while start <= stop
        mid = (start + stop) / 2

        if target < nums[mid]
            stop = mid - 1
        elsif target > nums[mid]
            start = mid + 1
        else
            ans = mid
            if find_start_index == true
                stop = mid - 1
            else
                start = mid + 1
            end
        end
    end
    ans
end