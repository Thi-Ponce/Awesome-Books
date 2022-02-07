class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Using local storage
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(title) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.title === title) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Show books in UI
class Interactions {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => Interactions.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#list');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${book.author}</td>
        <td>${book.title}</td>
        <td><button class="delete">Remove book</button></td>
      `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

// Showing a book
document.addEventListener('DOMContentLoaded', Interactions.displayBooks);

// Adding a book

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = new Book(title, author);

  Interactions.addBookToList(book);
  Store.addBook(book);
  Interactions.clearFields();
});

// Delete book 
document.querySelector('#list').addEventListener('click', (e) => {
  Interactions.deleteBook(e.target);

  // Delete book from local storage
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});