# @param {Integer[]} asteroids
# @return {Integer[]}
def asteroid_collision(asteroids)
    result = []

    asteroids.each do |a|
        while !result.empty? && a < 0 && result[-1] > 0
            t = a + result[-1]
            if t == 0
                a = 0
                result.pop
            elsif t < 0
                result.pop
            else
                a = 0
            end
        end
        
        result.push(a) if a != 0
    end
    result
end