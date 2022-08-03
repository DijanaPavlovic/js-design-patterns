class LibraryKiosk {
  open(app) {
    console.log(`Opening ${app}`);
  }
  connectTo(website) {
    console.log("Connecting to " + website);
  }
}

class ProxyLibraryKiosk {
  constructor() {
    this.library = new LibraryKiosk();
  }

  static forbiddenApps = new Set(["camera", "photos", "music", "settings"]);
  static forbiddenWebsites = new Set([
    "fb.com",
    "instagram.com",
    "snapchat.com",
    "google.com",
    "gmail.com",
  ]);

  open(app) {
    if (ProxyLibraryKiosk.forbiddenApps.has(app))
      return console.log(`You can't access the ${app}`);

    return this.library.open(app);
  }

  connectTo(website) {
    if (ProxyLibraryKiosk.forbiddenWebsites.has(website))
      return console.log(`Access to ${website} denied`);

    return this.library.connectTo(website);
  }
}

var libraryKiosk = new ProxyLibraryKiosk();
libraryKiosk.open("photos");
libraryKiosk.open("music");
libraryKiosk.open("Chrome");
libraryKiosk.connectTo("booksportal.com");
libraryKiosk.connectTo("google.com");
libraryKiosk.connectTo("fb.com");
