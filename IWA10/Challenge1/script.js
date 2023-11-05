const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: "Day of Reconciliation",
    date: `16 December ${currentYear}`,
  },
  1: {
    id: 1,
    name: "Workers Day",
    date: new Date(`1 April ${currentYear}`),
  },
  2: {
    id: 2,
    name: "Day of Goodwill",
    date: new Date(`26 December ${currentYear}`),
  },
  3: {
    id: 3,
    name: "New Year Day",
    date: new Date(`1 January ${currentYear}`),
  },
  4: {
    id: 4,
    name: "Womens Day",
    date: new Date(`9 August ${currentYear}`),
  },
  5: {
    id: 5,
    name: "Heritage Day",
    date: new Date(`24 September ${currentYear}`),
  },
  6: {
    id: 6,
    name: "Christmas Day",
    date: new Date(`25 December ${currentYear} 13:25`),
  },
  7: {
    id: 7,
    name: "Youth Day",
    date: new Date(`16 June ${currentYear}`),
  },
  8: {
    id: 8,
    name: "Human Rights Day",
    date: new Date(`21 March ${currentYear}`),
  },
};

const christmas = 6;
const futureId = 9;

// Do not change code above this comment

console.log(holidays[futureId] || `ID ${futureId} not created yet`);

copied = holidays.christmas;
copied = { name: "X-mas Day" };

correctDate = holidays[6];
correctDate = new Date(Date.UTC(2023, 11, 25));
correctDate.setUTCHours(10);

date = new Date(Date.UTC(2023, 11, 25));

console.log(correctDate);

isEarlier = new Date(Date.UTC(2023, 11, 25)) < holidays[6].date;
console.log("New date is earlier:", isEarlier);
if (isEarlier) copied.date = correctDate;
console.log(
  "ID change:",
  holidays[christmas].id && holidays[6] === holidays[2]
);
console.log("Name change:", copied.name);
console.log("Date change:", date.toLocaleDateString(2023, 11, 25));

date = currentYear;
console.log(date);

const firstHolidayTimestamp = new Date(
  `1 january ${currentYear}`
).toLocaleDateString(
  holidays[0].date.getTime,
  holidays[1].date.getTime,
  holidays[2].date.getTime,
  holidays[3].date.getTime,
  holidays[4].date.getTime,
  holidays[5].date.getTime,
  holidays[6].date.getTime,
  holidays[7].date.getTime,
  holidays[8].date.getTime
);

const lastHolidayTimestamp = new Date(
  `26 December ${currentYear}`
).toLocaleDateString(
  holidays[0].date.getTime,
  holidays[1].date.getTime,
  holidays[2].date.getTime,
  holidays[3].date.getTime,
  holidays[4].date.getTime,
  holidays[5].date.getTime,
  holidays[6].date.getTime,
  holidays[7].date.getTime,
  holidays[8].date.getTime
);
console.log(firstHolidayTimestamp);
console.log(lastHolidayTimestamp);

const firstDay = new Date(firstHolidayTimestamp).getDate();
console.log(firstDay);
const firstMonth = new Date(firstHolidayTimestamp).getDate();
console.log(firstMonth);
const lastDay = new Date(0, 0, 26).getDate();
console.log(lastDay);
const lastMonth = new Date(0, 12, 0).getMonth();
console.log(lastMonth);

console.log([firstDay], [firstMonth], [currentYear]);
console.log({ lastDay, lastMonth, currentYear });

const randomHoliday = holidays * Math.random();
console.log(randomHoliday.date);
