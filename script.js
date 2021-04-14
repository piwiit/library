/* eslint-disable no-param-reassign */
const myLibrary = [];

const cardsContent = document.querySelector('.cardContent');
const span = document.querySelector('.close');
const modal = document.querySelector('#myModal');
const addBook = document.querySelector('#add-book');
const checkbox = document.querySelector('#myCheck');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const pushNewBook = document.querySelector('#push-new-book');

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

const showBooks = () => {
  let n = 0;
  cardsContent.innerHTML = myLibrary.reduce(
    // eslint-disable-next-line no-return-assign
    (content, book) => (content += `<div class="card">
        <h3 class="title">${book.title}</h3>
        <div class="separator"></div>
        <ul >
          <li >${book.pages} pages</li>
          <li >${book.author}</li>
          <li >${
      book.status === true
        ? '<i class="fas fa-check"> Already Read</i>'
        : '<i class="far fa-times-circle" > Not read yet</i>'
      }<i class="fas fa-undo switch-button" data-index-number = ${(n += 1)}></i></li>
        </ul>
    </div>`),
    '',
  );
};

const addBookToLibrary = (title, author, pages, status) => {
  const newBook = new Book(title, author, pages, status);
  myLibrary.push(newBook);
  showBooks();
};
const exempleButton = document.querySelector('#exemple');

exempleButton.onclick = () => {
  addBookToLibrary('The Last Wish', 'Andrzej Sapkowski', '288', true);
  addBookToLibrary('Sword of Destiny', 'Andrzej Sapkowski', '384', true);
  addBookToLibrary('Blood of Elves', 'Andrzej Sapkowski', '320', true);
  addBookToLibrary('Time of Contempt', 'Andrzej Sapkowski', '331', true);
  addBookToLibrary('Baptism of Fire', 'Andrzej Sapkowski', '343', true);
  addBookToLibrary(
    'The Tower of the Swallow',
    'Andrzej Sapkowski',
    '436',
    false,
  );
  addBookToLibrary('The Lady of the Lake', 'Andrzej Sapkowski', '531', false);
  addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '366', true);
  addBookToLibrary('The Alchemist', 'Paulo Coelho', '182', false);
  addBookToLibrary('On the Road', 'Jack Kerouac', '307', false);
  addBookToLibrary('1984', 'George Orwell', '328', true);
};

addBook.onclick = () => {
  modal.style.display = 'block';
  cardsContent.style.filter = 'blur(2px)';
};

span.onclick = () => {
  modal.style.display = 'none';
  cardsContent.style.filter = 'blur(0px)';
};

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = 'none';
};

pushNewBook.onclick = () => {
  const title = bookTitle.value;
  const author = bookAuthor.value;
  const pages = bookPages.value;
  const status = checkbox.checked;
  addBookToLibrary(title, author, pages, status);
  modal.style.display = 'none';
  cardsContent.style.filter = 'blur(0px)';
};

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = 'none';
};

const switchstatue = (e) => {
  const currentBook = myLibrary[e.target.dataset.indexNumber];
  const switchButton = e.target.parentElement.childNodes[0];

  currentBook.status = !currentBook.status;
  switchButton.innerHTML = `${
    currentBook.status === true
      ? '<i class="fas fa-check"></i> Already Read'
      : '<i class="far fa-times-circle" ></i> Not read yet'
  }`;
};

window.addEventListener('click', switchstatue);
