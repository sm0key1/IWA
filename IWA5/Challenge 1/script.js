let location1 = " Rsa";
let location2 = "NAM";
let customers = 1;
let currencyR = "R";
let currencyN = "$";
let shippingRSA = 400;
let shippingNAM = 600;
let shipping = 800;
let currency = null;
let locationNK = null;

let FREE_WARNING = "Free shipping only applies to single customer orders";
let BANNED_WARNIN = "Unfortunately we do not ship to your country of residence";
let NONE_SELECTED = 0;

if ((location1 = "Rsa")) {
  currencyR === "R" && shippingRSA === 400;
  console.log(currencyR + shippingRSA);
} else {
  shipping = 800;
  console.warn(BANNED_WARNIN);
}

if ((location2 = "NAM")) {
  currencyN === "$" && shippingNAM === 600;
  console.log(currencyN + shippingNAM);
} else {
  shipping = 800;
  console.warn(BANNED_WARNIN);
}

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

function calcShipping() {
  if (shoes + toys + shirts + batteries + pens < 1000 && customers !== 1) {
  }
  if ((shipping = 0 && customers < 2)) {
  } else {
    currencyN + (shipping = 0);
    console.warn(FREE_WARNING);

    if ((location2 = "NAM")) {
      shipping = 0;
    }
    if ((location1 = "Rsa")) {
      shipping = 0;
    }
  }
}
function TotalCost(shoes, toys, shirts, batteries, pens) {
  if (TotalCost || 1 === 1) {
    TotalCost = shoes + toys + shirts + batteries + pens;
  }
}

console.log(
  "price",
  currencyR,
  shoes + batteries + toys + pens + shirts + shippingRSA
);
console.log(currencyN + (shipping = 0));
