const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const trees = {};
const len = input.length;

for (let i = 0; i < len; i++) {
  trees[input[i]] = (trees[input[i]] || 0) + 1;
}

console.log(
  Object.keys(trees)
    .sort()
    .map((key) => `${key} ${((trees[key] / len) * 100).toFixed(4)}`)
    .join("\n")
);

// solution([
//   "Red Alder",
//   "Ash",
//   "Aspen",
//   "Basswood",
//   "Ash",
//   "Beech",
//   "Yellow Birch",
//   "Ash",
//   "Cherry",
//   "Cottonwood",
//   "Ash",
//   "Cypress",
//   "Red Elm",
//   "Gum",
//   "Hackberry",
//   "White Oak",
//   "Hickory",
//   "Pecan",
//   "Hard Maple",
//   "White Oak",
//   "Soft Maple",
//   "Red Oak",
//   "Red Oak",
//   "White Oak",
//   "Poplan",
//   "Sassafras",
//   "Sycamore",
//   "Black Walnut",
//   "Willow",
// ]);
