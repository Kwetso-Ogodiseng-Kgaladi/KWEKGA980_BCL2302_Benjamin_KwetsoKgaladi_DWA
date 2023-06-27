import { dispatch, getState } from './redux.js'

const MAX_NUMBER = 15;
const MIN_NUMBER = -5;

const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]') 
const add = document.querySelector('[data-key="add"]')
const reset = document.querySelector('[variant="default"]')

const subtractHandler = () => {
   const newVaulue = parseInt(number.value) -1;
      number.value = newVaulue;

      if (newVaulue <= MIN_NUMBER){
        subtract.disabled = true
    } else{
        subtract.disabled = false
    }

}

const addHandler = () => {
    const newValue = parseInt(number.value) +1;
    number.value = newValue;

    if (newValue >= MAX_NUMBER){
        add.disabled = true
    } else{
        add.disabled = false
    }
}

const resetHandler = () => {
    number.value = 0;
    add.disabled = false;
    subtract.disabled = false;
    showMessage("The counter has been reset");
  };

  const showMessage = (message) => {
    alert(message);
    
  };

subtract.addEventListener('click',subtractHandler);
add.addEventListener('click', addHandler);
reset.addEventListener('click', resetHandler)

// console.log(getState()); 

// dispatch({ type: 'ADD' });
// dispatch({ type: 'ADD' });
// console.log(getState());

//  dispatch({ type: 'SUBTRACT' });
//  console.log(getState());

// dispatch({ type: 'RESET' });
//  console.log(getState());


// Event listener for the "ADD" button
add.addEventListener('click', () => {
    dispatch({ type: 'ADD' });
    displayCount();
  });
  
  // Event listener for the "SUBTRACT" button
  subtract.addEventListener('click', () => {
    dispatch({ type: 'SUBTRACT' });
    displayCount();
  });
  
  // Event listener for the "RESET" button
  reset.addEventListener('click', () => {
    dispatch({ type: 'RESET' });
    displayCount();
  });
  
  // Function to display the count
  function displayCount() {
    console.log(getState().count);
  }
  
  // Initial display
  displayCount();
