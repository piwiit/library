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
