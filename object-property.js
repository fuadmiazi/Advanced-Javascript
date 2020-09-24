const students = [
    {id: 1711042642, name: "Fuad Hasan"},
    {id: 1789563223, name: "Kuddus Mia"},
    {id: 1456955664, name: "Julekha Begum"},
    {id: 1456984666, name: "Tiger Bhai"}
];

// const newName = [];
// for(let i =0; i<students.length; i++){
//     var names = students[i].name;
//     newName.push(names); 
// }

//console.log(newName);

const names = students.map( s=> s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id>1600000000);
const biggerOne = students.find( s => s.id>1600000000);
console.log(biggerOne);