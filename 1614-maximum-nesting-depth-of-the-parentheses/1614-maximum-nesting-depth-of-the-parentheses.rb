# @param {String} s
# @return {Integer}
def max_depth(s)
    count = 0
    result = 0
    s.split('').each do |char|
        if char == '('
            count += 1
            result = [count, result].max
        elsif char == ')'
            count -= 1
        end
    end
    result
end