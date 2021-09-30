const nums = [10,4,5,6,4,8,4,4,9,-1];

// for (let i = 0; i < nums.length; i++) {
//     if(nums[i] <5){
//         break;
//     }
//     console.log(nums[i]);
    
    
// }
for (let i = 0; i < nums.length; i++) {
    if(nums[i] <5){
        continue;
    }
    console.log(nums[i]);
    
    
}