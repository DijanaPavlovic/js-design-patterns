class Employee {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
}

class EmployeeChain {
  setNextEmp(nextEmpInChain) {}
  assignWork(req) {}
}

class EasyLevelWorkHandler extends EmployeeChain {
  constructor() {
    super();
    this.nextEmpInChain = new EmployeeChain();
  }

  assignWork(req) {
    if (req.level === "Easy")
      return console.log(`Easy work assigned to: ${req.name}`);

    return this.nextEmpInChain.assignWork(req);
  }

  setNextEmp(nextEmpInChain) {
    this.nextEmpInChain = nextEmpInChain;
  }
}

class MediumLevelWorkHandler extends EmployeeChain {
  constructor() {
    super();
    this.nextEmpInChain = new EmployeeChain();
  }

  assignWork(req) {
    if (req.level === "Medium")
      return console.log(`Medium work assigned to: ${req.name}`);
    return this.nextEmpInChain.assignWork(req);
  }

  setNextEmp(nextEmpInChain) {
    this.nextEmpInChain = nextEmpInChain;
  }
}

class HardLevelWorkHandler extends EmployeeChain {
  constructor() {
    super();
    this.nextEmpInChain = new EmployeeChain();
  }

  assignWork(req) {
    if (req.level === "Hard")
      return console.log(`Hard work assigned to: ${req.name}`);

    return this.nextEmpInChain.assignWork(req);
  }
}

var w1 = new EasyLevelWorkHandler();
var w2 = new MediumLevelWorkHandler();
var w3 = new HardLevelWorkHandler();
w1.setNextEmp(w2);
w2.setNextEmp(w3);

const emp1 = new Employee("Joe", "Easy");
const emp2 = new Employee("Anne", "Medium");
const emp3 = new Employee("Shawn", "Hard");

w1.assignWork(emp1);
w1.assignWork(emp2);
w1.assignWork(emp3);
