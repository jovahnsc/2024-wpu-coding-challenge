// function countBy(x, n) {
//   let z = [];

//   for (let i = 1; i <= n; i++) {
//     z.push(i * x);
//   }

//   return z;
// }

// function countBy(x, n) {
//   return [...Array(n)].map((el, i) => x * (i + 1));
// }

const countBy = (x, n) => [...Array(n)].map((el, i) => x * (i + 1));

console.log(countBy(2, 5));
