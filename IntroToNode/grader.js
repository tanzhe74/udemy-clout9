function average(nums) {
    var sum = 0;
    for(var i = 0; i<nums.length; i++) {
        sum += nums[i];
    }
    return Math.round(sum / nums.length);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));