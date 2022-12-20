const arr = [1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 5, 6, 6, 6, 7, 8, 8, 8, 9, 9];

var count = {};
for (let i of arr) {
  count[i] = count[i] ? count[i] + 1 : 1;
}
console.log(count);
