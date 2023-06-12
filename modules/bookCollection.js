/* eslint-disable */
import Book from './book.js';

class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  displayBooks() {
    const bookCollection = document.getElementById('bookCollection');
    if (bookCollection) {
      bookCollection.innerHTML = '';

      this.books.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book-entry');

        const titlePara = document.createElement('p');
        titlePara.textContent = `${book.title} by ${book.author}`;
        bookDiv.appendChild(titlePara);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');
        removeButton.addEventListener('click', () => {
          this.removeBook(index);
        });

        bookDiv.appendChild(removeButton);

        bookCollection.appendChild(bookDiv);
      });
    }
  }

  addBook(title, author) {
    this.books.push(new Book(title, author));
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }
}

export default BookCollection;
