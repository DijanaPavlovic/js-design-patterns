//Component
class Directory {
  constructor(name, lastModified, size) {
    this.name = name;
    this.lastModified = lastModified;
    this.size = size;
  }
  getLastmodified() {}
  getSize() {}
  getName() {}
}

//Leaf subclass
class File extends Directory {
  constructor(name, lastModified, size) {
    super(name, lastModified, size);
  }
  getSize() {
    return this.size;
  }
  getName() {
    return this.name;
  }
  getLastModified() {
    return this.lasModified;
  }
}

//Composite subclass
class Folder extends Directory {
  constructor(name, lastModified, size) {
    super(name, lastModified, size);
    this.files = [];
  }

  getSize() {
    let size = 0;
    this.files.forEach((file) => (size += file.size));
    return size;
  }

  getName() {
    let name = [];
    this.files.forEach((file) => name.push(file.name));
    return name.join(",");
  }

  getLastModified() {
    let lasts = [];
    this.files.forEach((file) => lasts.push(file.lastModified));
    return Math.min(...lasts);
  }

  addFile(file) {
    this.files.push(file);
  }

  removeFile(removeFile) {
    this.files = this.files.filter((file) => file.name !== removeFile.name);
  }
}

const file = new File("penguiny.png", 6, 12);
file.getLastmodified();
file.getName();
file.getSize();
