//Define the Ninja class and write rest of the code here
const Ninja = function (name) {
  this.points = 100;
  this.name = name;
};

Ninja.prototype.punch = function (ninja2) {
  if (this.points <= 0 || ninja2.points <= 0)
    return `Can't punch ${ninja2.name}`;
  ninja2.points -= 20;
  return `${ninja2.name}'s points are ${ninja2.points}`;
};

Ninja.prototype.kick = function (ninja2) {
  if (this.points <= 0 || ninja2.points <= 0)
    return `Can't kick ${ninja2.name}`;
  ninja2.points -= 50;
  return `${ninja2.name}'s points are ${ninja2.points}`;
};

let ninja1 = new Ninja("Ninja1");
let ninja2 = new Ninja("Ninja2");

ninja1.kick(ninja2);
ninja2.punch(ninja1);
ninja1.kick(ninja2);
ninja1.punch(ninja2);
ninja2.kick(ninja1);
