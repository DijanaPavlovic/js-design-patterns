class ReverseIterator {
  constructor(list) {
    this.list = list;
    this.values = Object.values(list);
    this.index = this.values.length - 1;
  }

  hasprevElement() {
    return this.index >= 0;
  }

  last() {
    return this.values[this.values.length - 1];
  }

  previous() {
    return this.values[--this.index];
  }
}

function reverseIterate(items) {
  const iter = new ReverseIterator(items);

  for (let item = iter.last(); iter.hasprevElement(); item = iter.previous()) {
    console.log(item);
  }
}

reverseIterate({
  name: "Anne",
  age: "23",
  gender: "Female",
  Occupation: "Engineer",
});
