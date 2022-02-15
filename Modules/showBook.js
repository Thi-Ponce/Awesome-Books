import { Book } from "./book.js";
import { Store } from "./store.js";


export class showBooks {
    static displayBooks() {
      const books = Store.getBooks();
  
      books.forEach((book) => showBooks.addBookToList(book));
    }
  
    static addBookToList(book) {
      const list = document.querySelector('#list');
      const row = document.createElement('tr');
  
      row.innerHTML = `
          <td>${book.title} by </td>
          <td>${book.author}</td>
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