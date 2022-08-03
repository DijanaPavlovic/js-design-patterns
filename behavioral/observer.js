// function Subject() {
//   this.observers = [];

//   this.subscribe = function (observer) {
//     this.observers.push(observer);
//   };

//   this.unsubscribe = function (observerToUnsubscribe) {
//     this.observers = this.observers.filter(
//       (observer) => observer !== observerToUnsubscribe
//     );
//   };

//   this.notify = function (message) {
//     this.observers.forEach((observer) => observer.notify(message));
//   };
// }

// function Observer() {
//   this.message = "";
//   this.notify = function (message) {
//     this.message = message;
//   };
// }

// let subject = new Subject();

// let observer1 = new Observer();
// let observer2 = new Observer();

// subject.subscribe(observer1);
// console.log(observer1.message);
// console.log(observer2.message);

// subject.notify("MESSAGE 1");
// console.log(observer1.message);
// console.log(observer2.message);

// subject.subscribe(observer2);

// subject.notify("MESSAGE 2");
// console.log(observer1.message);
// console.log(observer2.message);

// subject.unsubscribe(observer1);
// subject.notify("MESSAGE 3");
// console.log(observer1.message);
// console.log(observer2.message);

function Subject() {
  this.observers = [];
}

Subject.prototype.subscribe = function (observer) {
  this.observers.push(observer);
};

Subject.prototype.unsubscribe = function (observerToUnsubscribe) {
  this.observers = this.observers.filter(
    (observer) => observer !== observerToUnsubscribe
  );
};

Subject.prototype.notify = function (message) {
  this.observers.forEach((observer) => observer.notify(message));
};

function Observer() {
  this.message = "";
  this.notify = function (message) {
    this.message = message;
  };
}

let subject = new Subject();

let observer1 = new Observer();
let observer2 = new Observer();

subject.subscribe(observer1);
console.log(observer1.message);
console.log(observer2.message);

subject.notify("MESSAGE 1");
console.log(observer1.message);
console.log(observer2.message);

subject.subscribe(observer2);

subject.notify("MESSAGE 2");
console.log(observer1.message);
console.log(observer2.message);

subject.unsubscribe(observer1);
subject.notify("MESSAGE 3");
console.log(observer1.message);
console.log(observer2.message);
