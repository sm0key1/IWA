let state = "idle";
let user = null;
let calculated = "1";

// Only allowed to change below

// logs how many times the user is called
const logCalc = () => {
  const isString = typeof calculated;

  const calculatedAsNumber = (calculated = isString ? calculated : null);

  calculated = parseInt(calculatedAsNumber) + 2;
};

const calcUser = () => {
  logCalc();

  if (calculated > 2) {
    user = "John";
  }
  if (calculated > 2) {
    state = "requesting";
  }
  if (calculated > 3) {
    state = "idle";
  }
};

function checkUser() {
  if (user && state === "requesting") {
    console.log(`User: ${user} (${calculated})`);
  }
}

// Only allowed to change code above

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();
