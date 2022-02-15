import { Book } from "./Class-book.js";
import { Store } from "./Store.js";
import { showBooks } from "./DOM-manip.js";

export const bookShow = document.addEventListener('DOMContentLoaded', showBooks.displayBooks);

export const bookAdd = document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
  
    const book = new Book(title, author);
  
    showBooks.addBookToList(book);
    Store.addBook(book);
    showBooks.clearFields();
  });
  
export const bookDelete = document.querySelector('#list').addEventListener('click', (e) => {
    showBooks.deleteBook(e.target);
  
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  });
  