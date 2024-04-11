// Debouncing
// Create a button UI and add debounce as follows:
// Show "Button Pressed X Times" every time button is pressed
// Increase "Trigrred  Y Times" count after 800ms of debounce

const btn = document.querySelector(".btn");
const btnPressed = document.querySelector(".pressed");
const count = document.querySelector(".count");

var pressedCount = 0;
var triggeredCount = 0;

const myDebounce = (cb, delay) => {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const debounced = myDebounce(() => {
  triggeredCount += 1;
  count.innerHTML = triggeredCount;
}, 800);

btn.addEventListener("click", () => {
  btnPressed.innerHTML = ++pressedCount;
  debounced();
});
