function twoSum(nums: number[], target: number): number[] {

    let range: number[] = [];
    for (let i = 0; i<nums.length; i++){
        for (let j = i + 1; j<nums.length; j++){
            if (nums[i] + nums[j] == target){
                range.push(i, j);
            }
        }
    }
    let index1 = range[0];
    let index2 = range[range.length - 1];
    return [index1,index2];
};