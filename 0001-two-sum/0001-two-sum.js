/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
 
      // 1. 배열의 i값과
 for (let i = 0; i < nums.length; i++) {
        // j는 i+1부터 시작해야 같은 숫자를 두 번 더하지 않음
        for (let j = i + 1; j < nums.length; j++) {
            // 두 수의 합이 target과 같으면 해당 인덱스를 반환
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};