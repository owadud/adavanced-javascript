const numbers = [3,4,5,8];

// numbers.map(function(element,index,array){
//     console.log(element,index,array) 
// }) map can take three parameters

// const result = numbers.map(function(element){
//     return element*element;
// })

const result = numbers.map(x=>x*x);

console.log(result);

//filter
 const bigger = numbers.filter(x=>x>5);
 const isThere = numbers.find(x=>x < 5);

console.log(bigger);
console.log(isThere);