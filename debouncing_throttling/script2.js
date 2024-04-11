// Throttling
// Create a button UI and add throttle as follows:
// Show "Button Pressed X Times" every time button is pressed
// Increase "Trigrred  Y Times" count after 800ms of throttle

const btn = document.querySelector(".btn");
const btnPressed = document.querySelector(".pressed");
const count = document.querySelector(".count");

var pressedCount = 0;
var triggeredCount = 0;

const start = new Date().getTime();

const throttledCount = _.throttle(() => {
  const end = new Date().getTime();
  console.log(start - end);

  count.innerHTML = ++triggeredCount;
}, 800);
// Gets triggered after every 800ms even after if one is typing

btn.addEventListener("click", () => {
  btnPressed.innerHTML = ++pressedCount;
  throttledCount();
});

/*
Throttling is similar to Debouncing
The only difference is that it ensures the execution of event handlers at regular intervals
even if the event continues to fire rapidly
It allows the function to execute once every interval given, regardless of how frequently the event occurs.
*/
