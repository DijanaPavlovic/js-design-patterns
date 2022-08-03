function Loans() {
  //implement Loan function here
  this.getloan = function (type, amount, duration) {
    switch (type) {
      case "home":
        return new HomeLoan(amount, duration);
      case "student":
        return new StudentLoan(amount, duration);
      case "personal":
        return new PersonalLoan(amount, duration);
    }
  };
}

function HomeLoan(amount, duration) {
  this.interest = 0.08;
  this.amount = amount;
  this.duration = duration;
  this.calculateInterest = function () {
    return this.amount * this.interest * this.duration;
  };
}

function StudentLoan(amount, duration) {
  this.interest = 0.03;
  this.amount = amount;
  this.duration = duration;
  this.calculateInterest = function () {
    return this.amount * this.interest * this.duration;
  };
}

function PersonalLoan(amount, duration) {
  this.interest = 0.05;
  this.amount = amount;
  this.duration = duration;
  this.calculateInterest = function () {
    return this.amount * this.interest * this.duration;
  };
}

var loan = new Loans();

var homeLoan = loan.getloan("home", 3200, 5);
homeLoan.calculateInterest();

var studentLoan = loan.getloan("student", 1800, 4);
studentLoan.calculateInterest();

var personalLoan = loan.getloan("personal", 1200, 2);
personalLoan.calculateInterest();
