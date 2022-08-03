// var Mortgage = function (name) {
//   this.name = name;
// };

// Mortgage.prototype.applyFor = function (amount) {
//   //   this.applyFor = function (amount) {
//   // access multiple subsystems...
//   var result = "approved";
//   if (!new Bank().verify(this.name, amount)) {
//     result = "denied";
//   } else if (!new Credit().get(this.name)) {
//     result = "denied";
//   } else if (!new Background().check(this.name)) {
//     result = "denied";
//   }
//   return this.name + " has been " + result + " for a " + amount + " mortgage";
// };
// // };

// var Bank = function () {
//   this.verify = function (name, amount) {
//     // complex logic ...
//     return true;
//   };
// };

// var Credit = function () {
//   this.get = function (name) {
//     // complex logic ...
//     return true;
//   };
// };

// var Background = function () {
//   this.check = function (name) {
//     // complex logic ...
//     return true;
//   };
// };

// var mortgage = new Mortgage("Joan Templeton");
// var result = mortgage.applyFor("$100,000");

// console.log(result);

// class Inventory {
//   shampoo = 20;
//   conditioner = 20;
//   hairSerum = 1000;

//   order({ name, amount }) {
//     let order;

//     if (this[name] >= amount) {
//       this[name] -= amount;
//       order = new BuyProduct();
//     } else {
//       order = new PreOrderProduct();
//     }

//     return order.display(name, amount);
//   }
// }

// class BuyProduct {
//   display(name, amount) {
//     console.log(
//       `${amount} bottles of ${name} are available. Click on "buy" to purchase them.`
//     );
//   }
// }

// class PreOrderProduct {
//   display(name, amount) {
//     console.log(
//       `${amount} bottles of ${name} are not available. You can Pre-order them on the next page.`
//     );
//   }
// }

class Inventory {
  //   shampoo = 20;
  //   conditioner = 20;
  //   hairSerum = 1000;
  constructor(shampoo = 20, conditioner = 20, hairSerum = 1000) {
    this.shampoo = shampoo;
    this.conditioner = conditioner;
    this.hairSerum = hairSerum;
  }

  checkAvailability({ name, amount }) {
    return this[name] >= amount;
  }

  removeProduct({ name, amount }) {
    this[name] -= amount;
  }
}

class BuyingProduct extends Inventory {
  buy(product) {
    let order;

    if (this.checkAvailability(product)) {
      this.removeProduct(product);
      order = new BuyProduct();
    } else {
      order = new PreOrderProduct();
    }

    return order.display(product);
  }
}

class BuyProduct {
  display({ name, amount }) {
    console.log(
      `${amount} bottles of ${name} are available. Click on "buy" to purchase them.`
    );
  }
}

class PreOrderProduct {
  display({ name, amount }) {
    console.log(
      `${amount} bottles of ${name} are not available. You can Pre-order them on the next page.`
    );
  }
}

const inventory = new BuyingProduct();
console.log(inventory.buy({ name: "shampoo", amount: 10 }));
console.log(inventory.buy({ name: "shampoo", amount: 10 }));
console.log(inventory.buy({ name: "shampoo", amount: 10 }));
console.log(inventory.buy({ name: "conditioner", amount: 10 }));
