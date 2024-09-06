# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
    buy = prices[0]
    profit = 0

    for i in 1..prices.length-1
      if prices[i] < buy
        buy = prices[i]
      elsif prices[i] - buy > profit
        profit = prices[i] - buy
      end
    end

  profit
end