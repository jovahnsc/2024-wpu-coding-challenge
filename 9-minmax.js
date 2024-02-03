// var min = function (list) {
//   let minValue = list[0];
//   for (let i = 1; i < list.length; i++) {
//     if (minValue > list[i]) {
//       minValue = list[i];
//     }
//   }
//   return list[0];
// };

// var max = function (list) {
//   let maxValue = list[0];
//   for (let i = 1; i < list.length; i++) {
//     if (maxValue < list[i]) {
//       maxValue = list[i];
//     }
//   }
//   return list[0];
// };

// var min = function (list) {
//   list.sort(function (a, b) {
//     return a - b;
//   });
//   return list[0];
// };

// var max = function (list) {
//   list.sort(function (a, b) {
//     return b - a;
//   });
//   return list[0];
// };

// const min = (list) => list.sort((a, b) => a - b)[0];

// const max = (list) => list.sort((a, b) => b - a)[0];

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

console.log(min([-52, 56, 30, 29, -54, 0, -110]));

console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
