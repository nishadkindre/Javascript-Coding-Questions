let myPromise = new Promise(() => {});
// console.log(myPromise); // Promise {pending}

async function abc() {
  return new Promise(() => {}); // status: pending
}
const res = abc();
console.log(res);
