export const showBookList = document.getElementById('nav-list');
export const showAddBook = document.getElementById('nav-add');
export const showContact = document.getElementById('nav-contact');

export const showList = () => {
  document.getElementById('book-list').style.display = 'flex';
  document.getElementById('add-new').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
}

export const showAdd = () => {
  document.getElementById('book-list').style.display = 'none';
  document.getElementById('add-new').style.display = 'flex';
  document.getElementById('contact').style.display = 'none';
}

export const showContactPage = () => {
  document.getElementById('book-list').style.display = 'none';
  document.getElementById('add-new').style.display = 'none';
  document.getElementById('contact').style.display = 'flex';
}
