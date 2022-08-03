// class User {
//   constructor(name, userId) {
//     this.name = name;
//     this.userId = userId;
//     this.chatbox = null;
//   }
//   sendMessage(message, sendTo) {
//     this.chatbox.send(message, this, sendTo);
//   }
//   receiveMessage(message, receiveFrom) {
//     console.log(`${receiveFrom.name} sent the message: ${message}`);
//   }
// }

// class ChatBox {
//   constructor() {
//     this.users = [];
//   }

//   register(user) {
//     this.users[user.userId] = user;
//     user.chatbox = this;
//   }

//   send(message, receiveFrom, sendTo) {
//     sendTo.receiveMessage(message, receiveFrom);
//   }
// }

// var chatbox = new ChatBox();
// var joey = new User("Joey", 1);
// var phoebe = new User("Phoebe", 2);
// chatbox.register(joey);
// chatbox.register(phoebe);
// joey.sendMessage("Hey, how you doing?", phoebe);
// phoebe.sendMessage("Smelly Cat, Smelly Cat..", joey);
// joey.sendMessage("I love this song!", phoebe);

class HR {
  constructor() {
    //define the constructor
  }

  registerEmployee(employee) {}

  scheduleRaise(raise, worker, manager) {
    let response = manager.receiveMessage(worker, raise);
    if (response) worker.receiveRaise(raise);
  }
}

class Employee {
  constructor(hr, name, position, pay) {
    this.hr = hr;
    this.name = name;
    this.position = position;
    this.pay = pay;
  }
}

class Manager extends Employee {
  constructor(hr, name, position, pay) {
    super(hr, name, position, pay);
  }
  receiveMessage(worker, raise) {
    console.log(`${worker.name} should get ${raise} dollar raise`);
    return this.finalizeRaise(worker, raise);
  }

  finalizeRaise(worker, raise) {
    console.log(`${worker.name}'s ${raise} dollar raise is approved`);
    return true;
  }
}

class Worker extends Employee {
  constructor(hr, name, position, pay) {
    super(hr, name, position, pay);
  }

  receiveRaise(raise) {
    this.pay += raise;
    console.log(`My new pay is ${this.pay} dollars`);
  }
}

var hr = new HR();
var employee = new Worker(hr, "Joe", "Developer", 1400);
var manager = new Manager(hr, "Allen", "Team Lead", 3000);
hr.scheduleRaise(200, employee, manager);
