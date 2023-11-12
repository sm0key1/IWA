const logTwice = () => {
  let firstName = "John";
  let age = 35;
  let hobby = "coding";

  console.log(firstName, age, hobby);
  console.log(firstName, age, hobby);
};

const hobby = () => {
  let firstName = "John";
  let age = 35;
  let hobby = "coding";

  logTwice(console.log(`Hello, ${firstName} ,(${age}). I love ${hobby}!`));
};

console.log(hobby());
