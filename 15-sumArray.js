// function sumArray(array) {
//   if (array == null || array.length <= 2) return 0;
//   const sorted = array.sort((a, b) => a - b);
//   let result = 0;
//   for (i = 1; i < sorted.length - 1; i++) {
//     result += sorted[i];
//   }
//   return result;
// }

// function sumArray(array) {
//   if (array == null || array.length <= 2) return 0;
//   return array
//     .sort((a, b) => a - b)
//     .slice(1, -1)
//     .reduce((acc, curr) => acc + curr);
// }

// function sumArray(array) {
//   return array == null || array.length <= 2
//     ? 0
//     : array
//         .sort((a, b) => a - b)
//         .slice(1, -1)
//         .reduce((acc, curr) => acc + curr);
// }

const sumArray = (array) =>
  array
    ? array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, curr) => acc + curr, 0)
    : 0;

console.log(sumArray([0, 10]));
