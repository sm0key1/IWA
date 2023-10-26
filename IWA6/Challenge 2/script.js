const rent = 400;
const tax = "8%";
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if (
  hourOfDay === "00" &&
  minuteOfDay === "00" &&
  hourOfDay !== null &&
  minuteOfDay !== null
);
{
  //how to make tax percentage
  const taxAsDecimal = parseInt(tax) / "100";

  const salaryAfterTax = salary * taxAsDecimal;

  const balance = salary - transport - food - rent - salaryAfterTax;
  console.log("R" + balance.toFixed(2));
}
