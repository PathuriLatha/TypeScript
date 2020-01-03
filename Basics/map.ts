/*
If we Practice with Map in TypeScript
  we should install this node "npm install @types/node --save-dev"
If we want iterate this map
  we should mention tsConfin.json file inside compilerOptions disable comment for " 'downlevelIteration': true"

*/

let map = new Map();

map.set(101, "Loukhya");
map.set(102, "Meghana");
map.set(103, "Lasya");
map.set(104, "Latha");
map.set(105, "Rama");
map.set(106, "Srivani");
map.set(107, "Bhargavi");
map.set(108, "Shirisha");

//Iterate over map keys
for(let keyIterate of map.keys()){
  console.log(`Map keys = ${keyIterate}`);
}
//Iterate over map values
for(let valueIterate of map.values()){
  console.log(`Map values = ${valueIterate}`);
}
//Iterate over map entries
console.log(`Map entries is :: `);
for(let entryIterate of map.entries()){
  console.log(`${entryIterate[0]} ${entryIterate[1]}`);
}




