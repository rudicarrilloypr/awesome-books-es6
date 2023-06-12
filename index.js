
import BookCollection from './modules/bookCollection.js';
import addBookEvent from './modules/addBookEvent.js';
import displayCurrentTime from './modules/dateTime.js';


let myBookCollection = new BookCollection();

// Get current pathname
let pathName = window.location.pathname;

switch (pathName) {
  case '/addbook.html':
    addBookEvent();
    break;
  case '/index.html':
    myBookCollection.displayBooks();
    break;
  default:
    // do nothing
}

const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

window.onload = () => {
  const dateTimeDisplay = document.getElementById('datetime');
  if (dateTimeDisplay) {
    dateTimeDisplay.textContent = displayCurrentTime();
  }
};