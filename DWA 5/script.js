let isSubmitPressed = false;
// Function to perform the division and display the result
function performDivision() {
  // Retrieve the input values
  const input1 = document.querySelector('[name="dividend"]').value;
  const input2 = document.querySelector('[name="divider"]').value;
  // Validation when values are missing
  if (input1 === '' || input2 === '') {
    document.querySelector('[data-result]').innerHTML = 'Division not performed. Both values are required in inputs. Try again.';
    return;
  }
  // Providing anything that is not a number should crash the program
  if (isNaN(input1) || isNaN(input2)) {
    document.body.innerHTML = 'Something critical went wrong. Please reload the page';
    console.error(new Error('Invalid input'));
    return;
  }
  // Perform the division
  const result = input1 / input2;
  if (input1 && input2 < 0) {
    document.querySelector('[data-result]').innerHTML = 'Division not performed. Invalid number provided. Try again.';
    console.error(new Error('Invalid division'));
  } else {
    document.querySelector('[data-result]').innerHTML = parseInt(result);
  }
}
// Function to handle the submit button click event
function submitButtonClicked() {
  isSubmitPressed = true;
  performDivision();
}
// Function to initialize the program state
function initializeProgramState() {
  if (!isSubmitPressed) {    // Check if the submit button has not been pressed
    document.querySelector('[data-result]').innerHTML = 'NO calculation performed';
  }
}
// Call the initializeProgramState function when the page has finished loading
window.onload = initializeProgramState;
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  submitButtonClicked()
});


