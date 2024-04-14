let car1 = {
  color: "red",
  company: "Ferrrari",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} ${this.company} car for ${currency}${price}`
  );
}

Function.prototype.myCall = function (context = {}, ...args) {
  // Here "this" refers to the function which is calling
  if (typeof this !== "function") {
    throw new Error(this + "is not Callable!");
  }

  console.log(this);
  console.log(context);

  context.fn = this;
  context.fn(...args);
};

purchaseCar.myCall(car1, "$", "100,000");
