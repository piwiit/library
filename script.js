/* eslint-disable no-param-reassign */
const myLibrary = [];

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

const showBooks = () => {
  document.querySelector('.cardContent').innerHTML = myLibrary.reduce(
    // eslint-disable-next-line no-return-assign
    (content, book) => (content += `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <ul >
          <li >${book.pages}</li>
          <li >${book.status}</li>
          <li >${book.author}</li>
        </ul>
      </div>
    </div>`),
    '',
  );
};

const addBookToLibrary = (title, author, pages, status) => {
  const newBook = new Book(title, author, pages, status);
  myLibrary.push(newBook);
  showBooks();
};
const exempleButton = document.querySelector('.exemple');

exempleButton.addEventListener('click', () => {
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
});
