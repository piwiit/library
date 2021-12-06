let myLibrary = [];

const addBookForm = document.getElementById('addBookForm');
const overlay = document.getElementById('overlay');
const addBookBtn = document.getElementById('addBookBtn');
const addBookModal = document.getElementById('addBookModal');

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

const openAddBookModal = () => {
  addBookForm.reset();
  addBookModal.classList.add('active');
  overlay.classList.add('active');
};

const closeModal = () => {
  addBookModal.classList.remove('active');
  overlay.classList.remove('active');
};

const addBookToLibrary = (title, author, pages, isRead) => {
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
};

const getBookToForm = () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const isRead = document.getElementById('isRead').checked;
  return addBookToLibrary(title, author, pages, isRead);
};

const removeBook = (i) => {
  myLibrary.splice(i, 1);
  console.log(myLibrary);
};

const defaultLibrary = () => {
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
};

addBookBtn.onclick = openAddBookModal;
overlay.onclick = closeModal;
addBookForm.onsubmit = getBookToForm;

window.addEventListener('load', defaultLibrary);
console.log(myLibrary);
