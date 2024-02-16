// const rps = (p1, p2) => {
//   let result1 = "Player 1 won!";
//   let result2 = "Player 2 won!";
//   let result3 = "Draw!";

//   // Player 1 Won
//   if (p1 === "rock" && p2 === "scissors") {
//     return result1;
//   } else if (p1 === "scissors" && p2 === "paper") {
//     return result1;
//   } else if (p1 === "paper" && p2 === "rock") {
//     return result1;
//   }

//   // Player 2 Won
//   else if (p2 === "rock" && p1 === "scissors") {
//     return result2;
//   } else if (p2 === "scissors" && p1 === "paper") {
//     return result2;
//   } else if (p2 === "paper" && p1 === "rock") {
//     return result2;
//   }

//   //   Draw
//   else if (p1 === p2) {
//     return result3;
//   }
// };

const rps = (p1, p2) => {
  const rules = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  return p1 === p2 ? "Draw" : `Player ${rules[p1] === p2 ? "1" : "2"} won!`;
};

console.log(rps("rock", "scissors"));
