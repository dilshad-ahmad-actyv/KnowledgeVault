console.time("add");
function add() {
  for (let i = 0; i < 100000000; i++) {
    let a = 10;
    let b = 20;
    let sum = a + b;
  }
}
console.timeEnd("add");
