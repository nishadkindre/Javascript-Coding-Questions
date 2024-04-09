var num = 999;

setTimeout(() => {
  const num = 555;

  const data = {
    num: 111,
    getNum() {
      return this.num;
    },
  };

  console.log(data.getNum()); // 111
  console.log(data.getNum.apply(this)); // 999 run this in browser, gives undefined in nodejs
}, 0);
