const ticketCheck = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Ticket Checker: Show your tickets");
        console.log("Husband: My wife is getting the tickets, she will come any time");
        console.log("Ticket checker: OK, please wait till she comes");
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
        console.log("Husband: Got the popcorn, let's go");
        console.log("Wife: I need some butter on my popcorn");
        resolve();
      }, 2000);
    });
  };
  
  const gettingButter = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Husband: Got the butter, let's go");
        console.log("Wife: Need a cold drink");
        resolve();
      }, 2000);
    });
  };
  
  const gettingColdDrink = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Husband: Here's your cold drink. Anything else?");
        console.log("Wife: No, don't you know we are getting late!");
        console.log("Wife: Please check the tickets");
        console.log("Person3 shows the tickets");
        resolve();
      }, 2000);
    });
  };
  
  const main = async () => {
    try {
      console.log("Person1 shows the tickets");
      console.log("Person2 shows the tickets");
  
      await ticketCheck();
      await wifeGettingTickets();
      await gettingPopcorn();
      await gettingButter();
      await gettingColdDrink();
  
      console.log("Person4 shows the tickets");
      console.log("Person5 shows the tickets");
      console.log("Person6 shows the tickets");
    } catch (error) {
      console.log(error);
    }
  };
  
  main();
  