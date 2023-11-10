const root1 = document.querySelector("dl", "order1");
console.log(root1);

//we need this to go

const biscuits1 = document.querySelectorAll("dd", "count")[0];
biscuits1.innerHTML = ["10"];
console.log(biscuits1);

const donuts1 = document.querySelectorAll("dd", "count")[1];
donuts1.innerHTML = ["13"];

const pancakes1 = document.querySelectorAll("dd", "count")[2];
pancakes1.innerHTML = ["0"];

const status1 = document.querySelectorAll("dd")[3];
status1.innerHTML = false;

const root2 = {
  order2: document.querySelectorAll("dl", "order2"),
};

const biscuits2 = document.querySelectorAll("dd", "count")[4];
biscuits2.innerHTML = ["5"];

const donuts2 = document.querySelectorAll("dd", "count")[5];
donuts2.innerHTML = ["0"];

const pancakes2 = document.querySelectorAll("dd", "count")[6];
pancakes2.innerHTML = ["2"];

const status2 = document.querySelectorAll("dd")[7];
status2.innerHTML = false;

/*count: document.querySelector("dd").innerHTML= biscuits1 + ;*/

const root3 = {
  order3: document.querySelectorAll("[data-key=order3 ]"),
};
const biscuits3 = document.querySelectorAll("dd", "count")[8];
biscuits3.innerHTML = ["12"];

const donuts3 = document.querySelectorAll("dd", "count")[9];
donuts3.innerHTML = ["11"];

const pancakes3 = document.querySelectorAll("dd", "count")[10];
pancakes3.innerHTML = ["15"];

const status3 = document.querySelectorAll("dd")[11];
status3.innerHTML = true;

(biscuits1 = 1 - root.biscuits),
  (donuts1 = 1 - root.donuts),
  (pancakes1 = 1 - root.pancakes)(
    (status1 = 1 - root.status ? Delivered : Pending)
  )((biscuits2 = 2 - root.biscuits))((donuts2 = 2 - root.donuts))(
    (pancakes2 = 2 - root.pancakes)
  )((status2 = 2 - root.status ? Delivered : Pending))(
    (biscuits3 = 3 - root.biscuits)
  )((donuts3 = 3 - root.donuts))((pancakes3 = 3 - root.pancakes))(
    (status3 = 3 - root.status ? Delivered : Pending)
  );
