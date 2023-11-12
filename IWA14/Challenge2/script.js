//function 1
function add(a, b) {
  return a + b;
}
result = add.call(this, 24, 24);
console.log(result);

// 2
function multiply(a, b) {
  return a * b;
}
result = add.call(this, 6, 6);
console.log(result);

// 3

function internal() {
  const added = this.add(this.a, this.b);
  this.multiply(this.a, this.b);
  return this;
}

// Not allowed to change below this

const example1 = {
  internal: {
    a: 2,
    b: 4,
    c: 8,
  },
  add,
  multiply,
  calculate: internal,
};

const example2 = {
  internal: {
    a: 2,
    b: 2,
    c: 3,
  },
  add,
  multiply,
  calculate: internal,
};

example1.calculate();
example2.calculate();
