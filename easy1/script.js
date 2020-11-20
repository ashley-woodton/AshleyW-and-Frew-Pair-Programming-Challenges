 var even = [];
 var odd =[];
 
 function sort(nums = []){
     for(var i = 0; i <nums.length; i++){
        if (nums[i] % 2 == 0){
            even.push(nums[i]);
        }else{
            odd.push(nums[i]);
        }
     }
     console.log(even);
     console.log(odd);
 }

var numbers = [2, 4, 7, 11, 15, 16];

sort(numbers);