// for
// 1 to 10
// Syntax
/*
    for (initialization; condition; incre/decre) {

    }
*/
// for (let i = 1; i <= 10; i++) {
//   // 11 <= 10
//   console.log("Iteration - " + i); // Iteration - 10
//   console.log(i); // 10
// }

// for (let i = 1; i <= 10; i++) {
//   // 4 <= 10
//   if (i % 2 == 0) {
//     // 4 % 2 => 0 == 0
//     console.log(i); // 2 4
//   }
// }

for (let i = 1; i <= 10; i++) {
  // 2 % 2 => 0 == 1
  if (i % 2 == 1) {
    continue;
  }
  console.log(i); // 2
}
