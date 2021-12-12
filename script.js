let myLibrary = [];

const addBookForm = document.getElementById('addBookForm');
const overlay = document.getElementById('overlay');
const addBookBtn = document.getElementById('addBookBtn');
const addBookModal = document.getElementById('addBookModal');
const bookGrid = document.getElementById('booksGrid');

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

const addBookToLibrary = (e) => {
  //stop submit
  e.preventDefault();
  const newBook = getBookToForm();
  myLibrary.push(newBook);
  closeModal();
  createBookCard(newBook);
  console.log(myLibrary);
};

const getBookToForm = () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const isRead = document.getElementById('isRead').checked;
  return new Book(title, author, pages, isRead);
};

const createBookCard = (book) => {
  const bookCard = document.createElement('div');
  const title = document.createElement('h3');
  const author = document.createElement('h3');
  const pages = document.createElement('h3');
  const removeBtn = document.createElement('button');
  const readBtn = document.createElement('button');

  bookCard.classList.add('book-card');
  removeBtn.classList.add('btn');
  removeBtn.classList.add('btn-red');
  readBtn.classList.add('btn');
  removeBtn.onclick = removeBook;

  title.textContent = `"${book.title}"`;
  author.textContent = book.author;
  pages.textContent = `${book.pages} pages`;
  removeBtn.textContent = 'Remove';

  if (book.isRead) {
    readBtn.textContent = 'Read';
    readBtn.classList.add('btn-light-green');
  } else {
    readBtn.textContent = 'Not read';
    readBtn.classList.add('btn-light-red');
  }

  removeBtn.setAttribute(
    'data-index',
    myLibrary.findIndex((element) => element.title === book.title)
  );

  bookGrid.appendChild(bookCard);
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(removeBtn);
  bookCard.appendChild(readBtn);
};

const removeBook = (e) => {
  const indexNumber = e.target.dataset.index;
  myLibrary.splice(indexNumber, 1);
  updateLibrary();
  console.log(myLibrary);
};

const updateLibrary = () => {
  resetLibrary();
  for (let book of myLibrary) {
    createBookCard(book);
  }
};

const resetLibrary = () => [(bookGrid.innerHTML = '')];

addBookBtn.onclick = openAddBookModal;
overlay.onclick = closeModal;

addBookForm.onsubmit = addBookToLibrary;

console.log(myLibrary);
