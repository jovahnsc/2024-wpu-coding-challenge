function arrayPlusArray(arr1, arr2) {
  // let total = 0;
  // for (let i = 0; i < arr1.length; i++) {
  //   total += arr1[i];
  // }
  // for (let i = 0; i < arr2.length; i++) {
  //   total += arr2[i];
  // }
  // return total;

  // let total = 0;
  // for (let i = 0; i < arguments.length; i++) {
  //   for (let j = 0; j < arguments[i].length; j++) {
  //     total += arguments[i][j];
  //   }
  // }
  // return total;

  return [...arr1, ...arr2].reduce((acc, curr) => acc + curr);

  // let tot1 = arr1.reduce((acc, curr) => acc + curr);
  // let tot2 = arr2.reduce((acc, curr) => acc + curr);
  // return tot1 + tot2;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
