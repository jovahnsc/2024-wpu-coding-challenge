// function getGrade(s1, s2, s3) {
//   const score = (s1 + s2 + s3) / 3;

//   if (score < 60) {
//     return "F";
//   } else if (score < 70) {
//     return "D";
//   } else if (score < 80) {
//     return "C";
//   } else if (score < 90) {
//     return "B";
//   } else {
//     return "A";
//   }
// }

const getGrade = (s1, s2, s3) =>
  (s1 + s2 + s3) / 3 < 60
    ? "F"
    : (s1 + s2 + s3) / 3 < 70
    ? "D"
    : (s1 + s2 + s3) / 3 < 80
    ? "C"
    : (s1 + s2 + s3) / 3 < 90
    ? "B"
    : (s1 + s2 + s3) / 3 <= 100
    ? "A"
    : "";

console.log(getGrade(70, 70, 100));
