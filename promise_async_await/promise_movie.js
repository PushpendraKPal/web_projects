const ticketCheck = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Ticket Checker: Show your tickets");
      console.log("Husband: My wife is getting the tickets, she will come any time");
      console.log("Ticket Checker: OK, Please wait till she comes");
      resolve();
    }, 2000);
  });
};

const wifeGettingTickets = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Wife: I am hungry, need some popcorn");
      resolve();
    }, 5000);
  });
};

const gettingPopcorn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Husband: got the popcorn, let's go");
      console.log("Wife: I need some butter on my popcorn");
      resolve();
    }, 2000);
  });
};

const gettingButter = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Husband: got the butter, let's go");
      console.log("Wife: need a cold drink");
      resolve();
    }, 2000);
  });
};

const gettingColdDrink = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Husband: here's your cold drink, anything else?");
      console.log("Wife: No, don't you know we are getting late!");
      console.log("Wife: Please check the tickets");
      console.log("Person3 shows the tickets");
      resolve();
    }, 2000);
  });
};

console.log("Person1 shows the tickets");
console.log("Person2 shows the tickets");

ticketCheck()
  .then(() => {
    return wifeGettingTickets();
  })
  .then(() => {
    return gettingPopcorn();
  })
  .then(() => {
    return gettingButter();
  })
  .then(() => {
    return gettingColdDrink();
  })
  .catch((e) => {
    console.log(e);
  });

console.log("Person4 shows the tickets");
console.log("Person5 shows the tickets");
console.log("Person6 shows the tickets");
