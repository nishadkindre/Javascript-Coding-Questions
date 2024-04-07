function createPyramid(height) {
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= height - i; j++) {
      // since the recent one should have most space and last one no space
      row += "  "; // Add spaces before the first asterisk
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      // since ther should be odd number of stars
      row += "* "; // Add asterisks
    }
    console.log(row);
  }
}

function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let str = "* ";
    let space = "  ";
    console.log(space.repeat(n - i) + str.repeat(i * 2 - 1));
  }
}

function reversePyramid(n) {
  for (let i = n; i >= 1; i--) {
    let str = "* ";
    let space = "  ";
    console.log(space.repeat(n - i) + str.repeat(i * 2 - 1));
  }
}

// Example usage:
createPyramid(5);
