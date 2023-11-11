const STATUS_MAP = {
  shelf: {
    color: "green",
    canReserve: true,
    canCheckout: true,
    canCheckIn: false,
  },
  reserved: {
    color: "blue",
    canReserve: false,
    canCheckout: true,
    canCheckIn: false,
  },
  overdue: {
    color: "red",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
  checkedOut: {
    color: "orange",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
};

// Edit below line

const book = {
  book1: {
    status: document.querySelector("#book1", ".status"),
    reserve: document.querySelector("#book1", "STATUS_MAP"),
    checkout: document.querySelector("#book1", "STATUS_MAP"),
    checkin: document.querySelector("#book1", ".checkin"),
  },

  book2: {
    status: document.querySelector("#book2", ".status"),
    reserve: document.querySelector("#book2", "STATUS_MAP"),
    checkout: document.querySelector("#book2", "STATUS_MAP"),
    checkin: document.querySelector("#book2", ".checkin"),
  },

  book3: {
    status: document.querySelector(".status"),
    reserve: document.querySelector(".reserve"),
    checkout: document.querySelector(".checkout"),
    checkin: document.querySelector(".checkin"),
  },
};

const checkin1 = document
  .querySelector(".checkin")
  .style.removeProperty("color")[0];

const status1 = document.querySelector("#book1", "span");
status1.style.color = "red";

reserve: STATUS_MAP.status.canReserver ? "enabled" : "disabled";

checkout: STATUS_MAP.status.canCheckout ? "enabled" : "disabled";

checkin: STATUS_MAP.status.canCheckIn ? "enabled" : "disabled";

const checkin2 = document
  .querySelector("#book2", ".checkin ")
  .style.removeProperty("color")[1];

const status2 = document.querySelector("#book2", "span");
status2.style.color = "blue";

reserve: STATUS_MAP.status.canReserver ? "enabled" : "disabled";

checkout: STATUS_MAP.status.canCheckout ? "enabled" : "disabled";

checkin: STATUS_MAP.status.canCheckIn ? "enabled" : "disabled";

const checkin3 = document
  .querySelector("#book3", ".checkin ")
  .style.removeProperty("color")[2];

const status3 = document.querySelector("#book3", "span");
status3.style.color = "blue";

reserve: STATUS_MAP.status.canReserver ? "enabled" : "disabled";

checkout: STATUS_MAP.status.canCheckout ? "enabled" : "disabled";

checkin: STATUS_MAP.status.canCheckIn ? "enabled" : "disabled";
