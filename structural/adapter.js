// class SimpleEarphones {
//   //   constructor() {
//   attach() {
//     console.log("Use Earphones with Type C phone");
//   }
//   //   }
// }

// class EarPhoneAdapter extends SimpleEarphones {
//   constructor(typeCphone) {
//     super();
//     this.attach = function () {
//       typeCphone.attach();
//     };
//   }
// }

// class TypeCPhone {
//   constructor() {
//     this.attach = function () {
//       console.log("Earphones attached to Type C phone");
//     };
//   }
// }

// var typeCphone = new TypeCPhone();
// var adapter = new EarPhoneAdapter(typeCphone);
// adapter.attach();

// old interface
class TruthAndDare {
  constructor() {
    this.turn = Math.floor(Math.random() * 2) + 1;
  }
  Getturn() {
    if (this.turn == 1) {
      this.turn = 2;
    } else {
      this.turn = 1;
    }
    return this.turn;
  }
  playGame(playerOnename, playerTwoname) {
    if (this.Getturn() == 1) {
      return `${playerOnename}'s turn`;
    } else {
      return `${playerTwoname}'s turn`;
    }
  }
}

// new interface
class NewTruthAndDare {
  constructor(randomValue) {
    this.turn = randomValue;
  }

  newplayGame(playerOnename, playerTwoname) {
    if (this.turn % 2 == 0) {
      return `${playerOnename}'s turn`;
    } else {
      return `${playerTwoname}'s turn`;
    }
  }
}

// Adapter Class
class Adapter extends NewTruthAndDare {
  constructor(randomValue) {
    super(randomValue);
    this.playGame = this.newplayGame;
  }
}

const obj = new Adapter(9);
obj.playGame("Ross", "Channdler");
