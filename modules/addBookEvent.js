import BookCollection from './bookCollection.js';

const addBookEvent = () => {
  const myBookCollection = new BookCollection();
  const addButton = document.getElementById('addButton');
  if (addButton) {
    addButton.addEventListener('click', () => {
      const newBookTitle = document.getElementById('newBookTitle');
      const newBookAuthor = document.getElementById('newBookAuthor');
      myBookCollection.addBook(newBookTitle.value, newBookAuthor.value);
      newBookTitle.value = '';
      newBookAuthor.value = '';
    });
  }
}

export default addBookEvent;
