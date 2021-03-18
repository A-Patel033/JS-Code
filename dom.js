// function count(selector) {
//   const List = document.querySelectorAll(selector);
//   console.log(List instanceof Array, typeof List);
//   return List.length;
// }
// console.log(count("p")); // All <p> elements
//  → 4
// console.log(count(".animal")); // Class animal
//  → 2
// console.log(count("p .animal")); // Animal inside of <p>
//  → 2
// console.log(count("p > .animal")); // Direct child of <p>

// console.log(document.querySelector("img").style);

//****************************************************************** */

// const MOUNTAINS = [
//   { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
//   { name: "Everest", height: 8848, place: "Nepal" },
//   { name: "Mount Fuji", height: 3776, place: "Japan" },
//   { name: "Vaalserberg", height: 323, place: "Netherlands" },
//   { name: "Denali", height: 6168, place: "United States" },
//   { name: "Popocatepetl", height: 5465, place: "Mexico" },
//   { name: "Mont Blanc", height: 4808, place: "Italy/France" }
// ];

// function addTable(data) { 
//   let table = document.createElement("table");
//   table.style.border = "2px solid black";
//   table.style.padding = "0px";
//   let row = document.createElement("tr");
//   for (let i in data[0]) {
//     let cell = document.createElement("th");
//     cell.style.border = "1px solid gray";
//     cell.style.margin = "0px";
//     cell.innerText = i;
//     row.appendChild(cell);
//   }
//   table.appendChild(row);
//   for (let i in data) {
//     row = document.createElement("tr");
//     for (let j in data[i]) {
//       let cell = document.createElement("td");
//       cell.style.border = "1px solid gray";
//       cell.style.margin = "0px";
//       cell.innerText = data[i][j];
//       row.appendChild(cell);
//     }
//     table.appendChild(row);
//   }
//   let div1 = document.querySelector("#mountains");
//   div1.appendChild(table);
// }
// addTable(MOUNTAINS);

//****************************************************************** */


// console.log("1");
// async function func2() {
//   for (let i = 0; i < 1000; i += 2) {
//     i--;
//   }
// }
// async function func() {
//   await func2();
//   console.log("3");
// }
// func();
// console.log("2");

//****************************************************************** 

// function timeoutPromise(interval) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve("done");
//     }, interval);
//   });
// }
// async function timeTest() {
//   const timeoutPromise1 = timeoutPromise(3000);
//   const timeoutPromise2 = timeoutPromise(3000);
//   const timeoutPromise3 = timeoutPromise(3000);

//   await timeoutPromise1;
//   await timeoutPromise2;
//   await timeoutPromise3;
// }
// let startTime = Date.now();
// timeTest().then(() => {
//   let finishTime = Date.now();
//   let timeTaken = finishTime - startTime;
//   alert("Time taken in milliseconds: " + timeTaken);
// });