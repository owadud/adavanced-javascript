const students = [
    {id:21, name:"omar sunny"},
    {id:24, name:"sunny"},
    {id:28, name:"manna"},
    {id:29, name:"Deepjol"}
]

// const output=[];

// for (let i = 0; i< students.length; i++) {
//   const result = students[i];
//   output.push(result);
//     }
// console.log(output);

const names = students.map(s=>s.name);
const ids = students.map(s=>s.id);
const bigger = students.filter(s=>s.id>22);
console.log(names,ids,bigger);
