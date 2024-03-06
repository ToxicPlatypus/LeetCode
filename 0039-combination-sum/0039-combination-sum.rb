# @param {Integer[]} candidates
# @param {Integer} target
# @return {Integer[][]}
def combination_sum(candidates, target)
    result = []
    backtrack(candidates, target, result, [], 0)
    return result
end

def backtrack(candidates, target, result, temp, index)
  if target == 0
    result.push(temp.dup) 
    return
  end

  for i in index..candidates.length-1
    if target - candidates[i] >= 0
      temp.push(candidates[i])
      backtrack(candidates, target-candidates[i], result, temp, i)
      temp.pop
    end
  end
end