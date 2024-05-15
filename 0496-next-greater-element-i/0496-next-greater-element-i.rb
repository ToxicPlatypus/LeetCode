def next_greater_element(nums1, nums2)
    result = []
    nums1.each do |n|
        max = n
        idx = nums2.find_index(n);
        for num in idx...nums2.length
            if(nums2[num] > max)
                max = nums2[num]
                break
            end
        end

        if(max > n)
            result.push(max)
        else
            result.push(-1)
        end

    end

    return result
    
end