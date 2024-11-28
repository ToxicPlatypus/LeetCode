# @param {Character[]} letters
# @param {Character} target
# @return {Character}
def next_greatest_letter(letters, target)
    start = 0
    stop = letters.length - 1

    while start <= stop
      mid = (start + stop) / 2

      if letters[mid] > target
        stop = mid - 1
      else
        start = mid + 1
      end
    end

    return letters[start % letters.length]
end