var removeDuplicates = function(nums) {
    const uniques = [...new Set(nums)]; // create unique values
    for (let i = 0; i < uniques.length; i++) {
        nums[i] = uniques[i]; // write them back into nums
    }
    return uniques.length; // return count of uniques
};