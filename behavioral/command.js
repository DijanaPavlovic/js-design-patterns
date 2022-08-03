// class Command {
//   execute() {}
// }

// //TurnOnPrinter command
// class TurnOnPrinter extends Command {
//   constructor(printingMachine) {
//     super();
//     this.printingMachine = printingMachine;
//     this.commandName = "turn on";
//   }

//   execute() {
//     this.printingMachine.turnOn();
//   }
// }

// //TurnOffPrinter command
// class TurnOffPrinter extends Command {
//   constructor(printingMachine) {
//     super();
//     this.printingMachine = printingMachine;
//     this.commandName = "turn off";
//   }

//   execute() {
//     this.printingMachine.turnOff();
//   }
// }

// //Print command
// class Print extends Command {
//   constructor(printingMachine) {
//     super();
//     this.printingMachine = printingMachine;
//     this.commandName = "print";
//   }

//   execute() {
//     this.printingMachine.print();
//   }
// }

// //Invoker
// class PrinterControlPanel {
//   pressButton(command) {
//     console.log(`Pressing ${command.commandName} button`);
//     command.execute();
//   }
// }

// //Reciever:
// class PrintingMachine {
//   turnOn() {
//     console.log("Printing machine has been turned on");
//   }

//   turnOff() {
//     console.log("Printing machine has been turned off");
//   }

//   print() {
//     console.log("The printer is printing your document");
//   }
// }

// const printingMachine = new PrintingMachine();
// const turnOnCommand = new TurnOnPrinter(printingMachine);
// const turnOffCommand = new TurnOffPrinter(printingMachine);
// const printCommand = new Print(printingMachine);
// const controlPanel = new PrinterControlPanel();
// controlPanel.pressButton(turnOnCommand);
// controlPanel.pressButton(turnOffCommand);
// controlPanel.pressButton(printCommand);

class BankAccount {
  constructor(amount) {
    this.amount = amount;
  }

  checkAmount() {
    console.log(this.amount);
  }

  withdrawMoney(withdrawamount) {
    if (withdrawamount > this.amount) {
      console.log("Not enough money");
    } else {
      this.amount -= withdrawamount;
    }
  }
  depositAmount(money) {
    this.amount += money;
  }
}

class Command {
  constructor(account) {
    this.account = account;
  }
  execute() {}
}

class CheckAmount extends Command {
  constructor(acc) {
    super(acc);
  }
  execute() {
    return this.account.checkAmount();
  }
}

class DepositAmount extends Command {
  constructor(acc) {
    super(acc);
  }
  execute(money) {
    return this.account.depositAmount(money);
  }
}

class WithDrawAmount extends Command {
  constructor(acc) {
    super(acc);
  }
  execute(money) {
    return this.account.withdrawMoney(money);
  }
}

class AccountManager {
  request(command, money) {
    command.execute(money);
  }
}

const manager = new AccountManager();
const account = new BankAccount(100);
const check = new CheckAmount(account);
manager.request(check);
const withdraw = new WithDrawAmount(account);
const deposit = new DepositAmount(account);
manager.request(withdraw, 10);
manager.request(check);
manager.request(deposit, 50);
manager.request(check);
