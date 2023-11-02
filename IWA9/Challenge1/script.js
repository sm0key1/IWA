const salary = 4000;
const lodging = "apartment";
const size = "large";

// Only change the syntax below (not the values or key names)

const expenses = {
  food: 51.7501,
  transport: 10.2,
};
const tax = {
  734: "3%",
  234: "20%",
  913: "12%",
  415: "38%",
  502: "42%",
};

const rent = {
  SmallRoom: 200,
  LargeRoom: 300,
  SmallApartment: 400,
  LargeApartment: 800,
  SmallHouse: 1200,
  LargeHouse: 2400,
};

console.log(rent);
// You can change below however you want

const taxAsDecimal = parseFloat(913 / 100);
console.log(taxAsDecimal);

const startingAfterTax = salary / 1 - taxAsDecimal;
console.log(startingAfterTax);

const type = `${lodging} ` + `${size}`;

const balance =
  parseFloat(salary) -
  expenses["transport"].toFixed(2) -
  expenses["food"].toFixed(2) -
  rent.LargeApartment;
console.log(balance);
