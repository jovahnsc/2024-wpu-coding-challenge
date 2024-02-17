// function getAverage(marks) {
//   let result = 0;
//   for (let i = 0; i < marks.length; i++) {
//     result += marks[i];
//   }
//   return Math.floor(result / marks.length);
// }

// function getAverage(marks) {
//   return Math.floor(marks.reduce((acc, curr) => acc + curr, 0) / marks.length);
// }

const getAverage = (marks) =>
  Math.floor(marks.reduce((acc, curr) => acc + curr, 0) / marks.length);

console.log(getAverage([2, 2, 2, 2]));
