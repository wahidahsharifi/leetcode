// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
var runningSum = function(nums) {
    let arr = []
    nums.reduce((a,c) => {
      const sum = a + c
      arr.push(sum)
      return sum
    }, 0)
    return arr
};