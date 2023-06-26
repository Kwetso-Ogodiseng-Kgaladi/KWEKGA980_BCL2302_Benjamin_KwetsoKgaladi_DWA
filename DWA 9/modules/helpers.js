export function createOptionElement(value, text) {
    const element = document.createElement('option');
  
    element.value = value;
    element.innerText = text;
  
    return element;
  }
  
  export function createBookPreviews(books) {
    const fragment = document.createDocumentFragment();
    for (const book of books) {
      const previewElement = factoryBook.createBookPreview(book);
      fragment.appendChild(previewElement);
    }
    return fragment;
  }
  
  