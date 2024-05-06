const obj = [
  {
    key: "Sample1",
    data: "Data1",
  },
  {
    key: "Sample2",
    data: "Data1",
  },
  {
    key: "Sample1",
    data: "Data1",
  },
  {
    key: "Sample3",
    data: "Data1",
  },
  {
    key: "Sample4",
    data: "Data1",
  },
  {
    key: "Sample2",
    data: "Data1",
  },
  {
    key: "Sample5",
    data: "Data1",
  },
  {
    key: "Sample1",
    data: "Data1",
  },
];

function operate(obj) {
  let data = {};
  obj.forEach((item) => {
    if (data[item.key]) {
      // data is available
      data[item.key].push(item);
    } else {
      data[item.key] = [item];
    }
  });
  return data;
}

let data = operate(obj);
console.log(data);
