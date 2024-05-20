# @param {Integer} n
# @return {Boolean}
def is_power_of_two(n)
    return false if n < 0
    n = n.to_s(2).count('1')
    n == 1
end
