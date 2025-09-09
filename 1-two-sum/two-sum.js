var twoSum = function(nums, target) {
    let result = undefined;
    nums.forEach((num, index) => {
      nums.forEach((n,i) => {
        if(num + n == target && index !== i) { result = [i, index] }
      })
    })
    return result
};