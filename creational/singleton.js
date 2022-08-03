// const singleton = (function () {
//   let instance;

//   const getInstance = function () {
//     if (!instance) {
//       instance = { number: Math.random() * 100 };
//     }
//     return instance;
//   };

//   return { getInstance: getInstance };
// })();

// console.log(singleton.getInstance());
// console.log(singleton.getInstance());

// const singleton = (function () {
//   let instance;

//   const getConfiguration = function ({ xpoint = 0, ypoint = 0, shape = null }) {
//     if (!instance) {
//       instance = { xpoint, ypoint, shape };
//     }

//     return instance;
//   };

//   return { getConfiguration };
// })();

// let instance1 = singleton.getConfiguration({
//   xpoint: 8,
//   ypoint: 9,
//   shape: "rectangle",
// });
// let instance2 = singleton.getConfiguration({
//   xpoint: 2,
//   ypoint: 4,
//   shape: "circle",
// });
// console.log(instance1);
// console.log(instance2);

class ConfigureVals {
  constructor({ xpoint = 0, ypoint = 0, shape = null }) {
    this.xpoint = xpoint;
    this.ypoint = ypoint;
    this.shape = shape;
  }

  static getConfiguration(configObj) {
    if (!this.instance) {
      this.instance = new ConfigureVals(configObj);
    }

    return this.instance;
  }
}

console.log(new ConfigureVals({ xpoint: 2, ypoint: 4, shape: "circle" }));

console.log(
  ConfigureVals.getConfiguration({ xpoint: 8, ypoint: 9, shape: "rectangle" })
); //first call

console.log(
  ConfigureVals.getConfiguration({ xpoint: 2, ypoint: 4, shape: "circle" })
); //second call

//write-your-code-implementation-here

// function Assignment() {
//     this.make = function(builder) {
//       builder.step1();
//       builder.step2();
//       builder.step3();
//       builder.step4();
//       return builder.task;
//     }
//   }

//   function AssignmentBuilder(subject, level, dueDate) {
//     this.task = null;

//     this.step1 = function() {
//       this.task = new Task()
//     }
//   this.step2 = function() {
//     this.task.setSubject(subject)
//   }
//   this.step3 = function() {
//     this.task.setLevel(level)
//   }
//   this.step4 = function() {
//     this.task.setDueDate(dueDate)
//   }

//   }

//   function Task() {
//     this.subject = undefined;
//     this.level = undefined;
//     this.dueDate = undefined;

//     this.setSubject = function(subject) {this.subject = subject};
//     this.setLevel = function(level) {this.level = level};
//     this.setDueDate = function(dueDate) {this.dueDate = dueDate};

//     this.announcement = function(){
//         console.log(`Your ${this.subject} assignment's difficulty level is: ${this.level}. It is due on ${this.dueDate}.`)
//     }
//   }

//   try{
//     var assignment = new Assignment();
//     var assignmentBuilder = new AssignmentBuilder("Math","Hard","12th June, 2020");
//     var mathAssignment = assignment.make(assignmentBuilder);
//     mathAssignment.announcement();
//     }catch(e){
//       console.log(e);
//     }
