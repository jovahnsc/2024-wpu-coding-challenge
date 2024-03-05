// function greet(name, owner) {
//   if (name === owner) {
//     return `Hello boss`;
//   } else {
//     return `Hello guest`;
//   }
// }

const greet = (name, owner) => (name === owner ? `Hello boss` : `Hello guest`);

console.log(greet("Daniel", "Daniel"));
