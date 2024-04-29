function* getMultipleReturns() {
  yield 10;
  yield 20;
}
const fn = getMultipleReturns();
console.log(fn.next());
console.log(fn.next());
console.log(fn.next());
