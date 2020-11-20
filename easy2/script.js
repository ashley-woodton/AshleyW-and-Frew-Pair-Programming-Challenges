var primeArray = []
function prime(nums = []) {
    for(var i = 0; i < nums.length; i++) {
     if (nums[i] ===2 && nums[i]!= 1) {
            primeArray.push(nums[i])
        }else if (nums[i] %2!=0 && nums[i]!= 1) {
            primeArray.push(nums[i])
        }
    }
}
var numArray = [1,2,10,18,19,29,33,35,47,66,83]
prime(numArray)
console.log(primeArray)