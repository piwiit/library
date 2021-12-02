let myLibrary = [];

function book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
  const newBook = new book(title, author, pages);
  myLibrary.push(newBook);
  console.log(myLibrary);
}

function removeBook(i) {
  myLibrary.splice(i, 1);
  console.log(myLibrary);
}

function defaultLibrary() {
  addBookToLibrary('The Last Wish', 'Andrzej Sapkowski', '288', true);
  addBookToLibrary('Sword of Destiny', 'Andrzej Sapkowski', '384', true);
  addBookToLibrary('Blood of Elves', 'Andrzej Sapkowski', '320', true);
  addBookToLibrary('Time of Contempt', 'Andrzej Sapkowski', '331', true);
  addBookToLibrary('Baptism of Fire', 'Andrzej Sapkowski', '343', true);
  addBookToLibrary('The Tower of the Swallow', 'Andrzej Sapkowski', '436', false);
  addBookToLibrary('The Lady of the Lake', 'Andrzej Sapkowski', '531', false);
  addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '366', true);
  addBookToLibrary('The Alchemist', 'Paulo Coelho', '182', false);
  addBookToLibrary('On the Road', 'Jack Kerouac', '307', false);
  addBookToLibrary('1984', 'George Orwell', '328', true);
}

defaultLibrary();
