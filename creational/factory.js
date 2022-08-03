// class IceCreamFactory {
//   createIceCream = function (flavor) {
//     switch (flavor) {
//       case "chocolate":
//         return new Chocolate();
//       case "vanilla":
//         return new Vanilla();
//       default:
//         return new Vanilla();
//     }
//   };
// }

// class Chocolate {
//   constructor() {
//     this.flavour = "chocolate";
//     this.message = "I am chocolate.";
//   }
// }

// class Vanilla {
//   constructor() {
//     this.name = "vanilla";
//     this.message = "I am vanilla.";
//   }
// }

// const iceCreamFactory = new IceCreamFactory();

// const chocolate = iceCreamFactory.createIceCream("chocolate");
// const vanilla = iceCreamFactory.createIceCream("vanilla");

// console.log(chocolate);

// console.log(vanilla);

//-----------------------------------------------------------------

// const iceCreamFactory = (flavour) => new IceCream(flavour);

// function IceCream(flavour) {
//   this.flavour = flavour;
//   this.message = `I am ${flavour}`;
// }

// const chocolate = iceCreamFactory("chocolate");
// const vanilla = iceCreamFactory("vanilla");

// console.log(chocolate);

// console.log(vanilla);

//-----------------------------------------------------------------
