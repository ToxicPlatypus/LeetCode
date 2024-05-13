# @param {String} s
# @return {String}
def frequency_sort(s)
    counts = Hash.new(0)

    s.split('').each do |l|
        counts[l] += 1
    end

    counts = counts.sort_by{ |key, value| value }.reverse.to_h
    result = counts.map{ |char, count| char*count }.join

    result
end