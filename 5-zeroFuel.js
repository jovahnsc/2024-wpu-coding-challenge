const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  distanceToPump <= fuelLeft * mpg;
console.log(zeroFuel(100, 50, 1));
