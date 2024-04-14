let car1 = {
  color: "red",
  company: "Ferrari",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} ${this.company} car for ${currency}${price}`
  );
}

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it's not Callable!");
  }
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const newFunc = purchaseCar.myBind(car1, "$");
const msg = newFunc("5,000,0000");
console.log(msg);
