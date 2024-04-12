function removeDuplicate(arr) {
  return [...new Set(arr)];
}

function removeDuplicate2(arr) {
  return arr.filter((item, val) => arr.indexOf(item) === val); // indexOf returns the first occurence
}

function removeDuplicate3(arr) {
  return arr.reduce((acc, curr) => {
    return acc.includes(curr) ? acc : [...acc, curr];
  }, []); // indexOf returns the first occurence
}

function removeDuplicate4(arr) {
  let newArr = [];
  arr.forEach((element) => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });
  return newArr;
}

let arr = [1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 6, 6, 6, 7];
console.log(removeDuplicate4(arr));
