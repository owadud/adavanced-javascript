const nums = [4,5,6,4,8,4,4,9];
const part = nums.slice(2,5);

const removed = nums.splice(2,5);

console.log(part);
console.log(removed);

const together = nums.join(" ami ");

console.log(together);