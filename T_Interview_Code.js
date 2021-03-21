// const str = "9 0 6 | 15 14 9";
// const arry = str.split("|");
// //const result2 = result1.splice(0);
// const list1 = arry[0].trim().split(" ");
// const list2 = arry[1].trim().split(" ");

// const numberlist1 = list1.map((el) => parseInt(el));
// const numberlist2 = list2.map((el) => parseInt(el));

// const MaxNumOfList1 = Math.max(...numberlist1);
// const MaxNumOfList2 = Math.max(...numberlist2);

// const MinNumOfList1 = Math.min(...numberlist1);
// const MinNumOfList2 = Math.min(...numberlist2);

// // console.log(MaxNumOfList2);
// // console.log(MaxNumOfList1);
// // console.log(MinNumOfList1);
// // console.log(MinNumOfList2);
// if (
//   numberlist1.length <= 1 ||
//   numberlist1.length > 10 ||
//   numberlist2.length <= 1 ||
//   numberlist2.length > 10
// ) {
//   console.log("Your length of number list must between 1 to 10.");
// } else if (numberlist1.length !== numberlist2.length) {
//   console.log("Your both number list must be same.");
// } else if (
//   MaxNumOfList1 > 99 ||
//   MinNumOfList1 < 0 ||
//   MaxNumOfList2 > 99 ||
//   MinNumOfList2 < 0
// ) {
//   console.log("Your number in the list must between 0 and 99.");
// } else {
//   const finalResult = numberlist1.map(function (num, i) {
//     let multiply = num * numberlist2[i];
//     return multiply;
//   });

//   let s = "";
//   for (let i = 0; i < finalResult.length; i++) {
//     s += finalResult[i] + " ";
//   }
//   console.log(s);
//   // console.log(finalResult);
// } 

// //**************************************************************** */

// var allPermutations = [],
//   usedNumbers = [],
//   verifiedList = [];

// const numbers = [5, 10, 15, 40, 5];

// const MaxNum = Math.max(...numbers);
// const MinNum = Math.min(...numbers);

// if (MaxNum > 52 || MinNum < 1) {
//   console.log("Your number list must be between 1 to 52");
// } else {
//   verifiedList.push(numbers);
//   const getAllPermutations = (array) => {
//     var i, ch;
//     for (i = 0; i < array.length; i++) {
//       ch = array.splice(i, 1)[0];
//       usedNumbers.push(ch);
//       if (array.length === 0) {
//         allPermutations.push(usedNumbers.slice());
//       }
//       getAllPermutations(array);
//       array.splice(i, 0, ch);
//       usedNumbers.pop();
//     }
//     return allPermutations;
//   };

//   const getAllCombinations = (array) => {
//     //console.log(array);
//     const operatorCombinations = [];
//     for (let i = 0; i < array.length; i++) {
//       for (let j = 0; j < array.length; j++) {
//         for (let k = 0; k < array.length; k++) {
//           for (let l = 0; l < array.length; l++) {
//             operatorCombinations.push([array[i], array[j], array[k], array[l]]);
//           }
//         }
//       }
//     }
//     return operatorCombinations;
//   };

//   const numberPermutations = getAllPermutations(verifiedList);
//   // console.log(numberPermutations);

//   const ops = ["+", "-", "*"];
//   const operatorCombinations = getAllCombinations(ops);
//   //console.log(operatorCombinations);
//   const target = 42;
//   let isPossible = false;

//   numberPermutations.forEach((permutation) => {
//     operatorCombinations.forEach((combination) => {
//       let result = permutation[0];
//       for (let index = 1; index < permutation.length; index++) {
//         if (combination[index - 1] === "+") {
//           result += permutation[index];
//         } else if (combination[index - 1] === "-") {
//           result -= permutation[index];
//         } else {
//           result *= permutation[index];
//         }
//       }
//       if (result === target) {
//         isPossible = true;
//       }
//     });
//   });

//   if (isPossible) {
//     console.log("YES");
//     //return "YES";
//   } else {
//     console.log("NO");
//     //return "NO";
//   }
// }
