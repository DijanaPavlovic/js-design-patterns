// class Visitor {
//   visit(item) {}
// }

// class BookVisitor extends Visitor {
//   visit(book) {
//     var cost = 0;
//     if (book.getPrice() > 50) {
//       cost = book.getPrice() * 0.5;
//     } else {
//       cost = book.getPrice();
//     }
//     console.log(
//       "Book name: " +
//         book.getName() +
//         "\n" +
//         "ID: " +
//         book.getID() +
//         "\n" +
//         "cost: " +
//         cost
//     );
//     return cost;
//   }
// }

// class Book {
//   constructor(id, name, price) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//   }
//   getPrice() {
//     return this.price;
//   }
//   getName() {
//     return this.name;
//   }
//   getID() {
//     return this.id;
//   }
//   accept(visitor) {
//     return visitor.visit(this);
//   }
// }

// var visitor = new BookVisitor();
// var book1 = new Book("#1234", "lordOftheRings", 80);
// book1.accept(visitor);

class RockMusicVisitor {
  //write your code here
  visit(library) {
    const rock = [];
    library.songs.forEach((song) => {
      if (song.genre === "Rock") rock.push(song.name);
    });

    return rock;
  }
}

class Song {
  constructor(name, genre) {
    this.name = name;
    this.genre = genre;
  }
  getName() {
    return this.name;
  }
  getGenre() {
    return this.genre;
  }
}

class MusicLibrary {
  constructor() {
    this.songs = [];
  }
  //write your code here
  addSong(song) {
    this.songs.push(song);
  }

  accept(visitor) {
    return visitor.visit(this);
  }
}

var rockMusicVisitor = new RockMusicVisitor();
var song1 = new Song("Bohemian Rhapsody", "Rock");
var song2 = new Song("Stairway to Heaven", "Rock");
var song3 = new Song("Oops I did it again", "Pop");
var song4 = new Song("Crazy", "Country");
var musicLibrary = new MusicLibrary();
musicLibrary.addSong(song1);
musicLibrary.addSong(song2);
musicLibrary.addSong(song3);
musicLibrary.addSong(song4);
console.log(musicLibrary.accept(rockMusicVisitor));
