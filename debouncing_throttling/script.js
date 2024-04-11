// Debouncing
// Create a button UI and add debounce as follows:
// Show "Button Pressed X Times" every time button is pressed
// Increase "Trigrred  Y Times" count after 800ms of debounce

const btn = document.querySelector(".btn");
const btnPressed = document.querySelector(".pressed");
const count = document.querySelector(".count");

var pressedCount = 0;
var triggeredCount = 0;

const start = new Date().getTime();

const debounced = _.debounce(() => {
  const end = new Date().getTime();
  console.log(start - end);

  count.innerHTML = ++triggeredCount;
}, 800);

btn.addEventListener("click", () => {
  btnPressed.innerHTML = ++pressedCount;
  debounced();
});

/*
Here's how debouncing works:

1. When an event is triggered, a function is called to handle the event.
2. Before executing the function, a timer is set for a specified delay.
3. If the event is triggered again before the timer expires, the previous timer is cleared, and a new timer is set.
4. The function is only executed when the timer expires and no new event has been triggered in the meantime.

This ensures that the function is only called once after a series of rapid events, with a delay introduced between each execution.

Debouncing is used in features such as Infinite Scroll on applications such as Instagram, Twitter
Search operations on e-commerce sites is also an example
*/
