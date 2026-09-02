//New Approach
//T(C(N))==O(N) and S(C(N))==O(1) as it requires contigous space alloc iteratively 
var minMoves2 = function(nums) {//minMoves() method declare
    nums.sort((a, b) => a - b);//sorting the array 
    const median = nums[Math.floor(nums.length / 2)];//median declare
    return nums.reduce((sum, num) => sum + Math.abs(num - median), 0);//printing output 
};
//old Approach
// var minMoves2 = function(nums) {
//     let out=0;let n=nums.length;
//     for(let i=0;i<n;i++){ 
//         for(let j=i+1;j<n-1;j++){
//             if(nums[i]!==nums[j]){
//                 out+=Math.max(nums[i]);
//             }
//             else out-=Math.max(nums[j+(n-1)]);
//     }
//     }return nums;
// };
