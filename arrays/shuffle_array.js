function shuffleArray(arr) {
  // Copy the input array to avoid modifying the original array
  const arrayCopy = [...arr];

  function shuffle() {
    for (let i = arrayCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // random number from 0 to i
      [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }
    return arrayCopy;
  }

  return shuffle;
}

const originalArray = [1, 2, 3, 4, 5];

const shuffleFunction = shuffleArray(originalArray);

console.log(shuffleFunction());
console.log(shuffleFunction());
console.log(shuffleFunction());
