class Applications {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  display() {}
  displayMode() {}
}

class Facebook extends Applications {
  constructor(name, type) {
    super(name, type);
    this.mode = "light";
    this.setMode = function (mode) {
      this.mode = mode;
    };
  }
  display() {
    console.log(`Welcome to Facebook for ${this.type}.`);
  }
  displayMode() {
    console.log(`You are using facebook in ${this.mode} mode.`);
  }
}

class WhatsApp extends Applications {
  constructor(name, type) {
    super(name, type);
    this.mode = "light";
  }
  display() {
    console.log(`Welcome to Whatsapp for ${this.type}.`);
  }
  displayMode() {
    console.log(`You are using Whatsapp in ${this.mode} mode.`);
  }
  setMode(mode) {
    this.mode = mode;
  }
}

class Mode {
  constructor(app) {
    this.app = app;
  }

  darkMode() {
    this.app.setMode("dark");
  }

  lightMode() {
    this.app.setMode("light");
  }
}

const fb = new Facebook("Facebook", "Social Networking");
const mode = new Mode(fb);
mode.darkMode();
fb.displayMode();

const whatsapp = new WhatsApp("Whatsapp", "Chatting");
const mode2 = new Mode(whatsapp);
mode2.lightMode();
whatsapp.displayMode();
