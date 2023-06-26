import { createOptionElement } from './helpers.js';

export function filters() {
  // ... (existing code)
}

/**
 * Function to filter books
 * @param {*} filters
 * @returns
 */
function filterBooks(filters) {
  return books.filter((book) => {
    let genreMatch = filters.genre === 'any';
    for (const singleGenre of book.genres) {
      if (genreMatch) break;
      if (singleGenre === filters.genre) {
        genreMatch = true;
      }
    }
    return (
      (filters.title.trim() === '' ||
        book.title.toLowerCase().includes(filters.title.toLowerCase())) &&
      (filters.author === 'any' || book.author === filters.author) &&
      genreMatch
    );
  });
}

export function handleSearchFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filters = Object.fromEntries(formData);
    const result = filterBooks(filters);
    page = 1;
    matches = result;
    toggleListMessage(result.length < 1);
    clearListItems();
    const newItems = createBookPreviews(result.slice(0, BOOKS_PER_PAGE));
    appendItemsToList(newItems);
    updateListButton();
    scrollToTop();
    closeSearchOverlay();
  }

