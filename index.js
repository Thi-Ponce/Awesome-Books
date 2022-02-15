/* eslint-disable max-classes-per-file */
/* eslint import/no-unresolved: 2 */
import { Book } from './modules/book.js';
import { Store } from './modules/store.js';
import { showBooks } from './modules/showBook.js';
import {
  showAdd, showAddBook, showBookList, showList, showContact, showContactPage,
} from './modules/onClick.js';

document.addEventListener('DOMContentLoaded', showBooks.displayBooks);

window.addEventListener('load', () => {
  showList();
});
showBookList.addEventListener('click', () => {
  showList();
});
showAddBook.addEventListener('click', () => {
  showAdd();
});
showContact.addEventListener('click', () => {
  showContactPage();
});

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = new Book(title, author);

  showBooks.addBookToList(book);
  Store.addBook(book);
  showBooks.clearFields();
});

document.querySelector('#list').addEventListener('click', (e) => {
  showBooks.deleteBook(e.target);

  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});
