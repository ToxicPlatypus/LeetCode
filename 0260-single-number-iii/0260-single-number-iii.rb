# @param {Integer[]} nums
# @return {Integer}
def single_number(nums)
    xor_of_nums = 0
    a = 0
    b = 0
    nums.each do |num|
        xor_of_nums ^= num
    end
    
    temp = xor_of_nums & -xor_of_nums

    nums.each do |num|
        if num & temp != 0
            a = a ^ num
        else
            b = b ^ num
        end
    end

    return [a, b]
end