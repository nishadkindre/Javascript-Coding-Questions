let car1 = {
  color: "red",
  company: "Ferrari",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} ${this.company} car for ${currency}${price}`
  );
}

Function.prototype.myApply = function (context = {}, args = []) {
  // Here "this" refers to the function which is calling
  if (typeof this !== "function") {
    throw new Error(this + "is not Callable!");
  }
  if (!Array.isArray(args)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }

  context.fn = this;
  context.fn(...args);
};

purchaseCar.myApply(car1, ["$", "100,000"]);
