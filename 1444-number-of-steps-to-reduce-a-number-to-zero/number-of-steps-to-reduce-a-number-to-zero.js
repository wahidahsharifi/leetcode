var numberOfSteps = function(num) {
    let nam = 0
    while(num != 0) {
        num = num % 2 == 0 ? num / 2 : num - 1
        nam += 1
    }
    return nam
};