/* eslint-disable import/prefer-default-export */
const showBookList = document.getElementById('nav-list');
const showAddBook = document.getElementById('nav-add');
const showContact = document.getElementById('nav-contact');

export function showList() {
  document.getElementById('book-list').style.display = 'flex';
  document.getElementById('add-new').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
}
export function showAdd() {
  document.getElementById('book-list').style.display = 'none';
  document.getElementById('add-new').style.display = 'flex';
  document.getElementById('contact').style.display = 'none';
}
export function showContactPage() {
  document.getElementById('book-list').style.display = 'none';
  document.getElementById('add-new').style.display = 'none';
  document.getElementById('contact').style.display = 'flex';
}

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