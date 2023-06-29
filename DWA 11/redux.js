
// Initial state
let state = {
  count: 0
};

// Reducer function to update the state based on dispatched actions
const reducer = (currentState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...currentState,
        count: currentState.count + 1
      };
    case 'SUBTRACT':
      return {
        ...currentState,
        count: currentState.count - 1
      };
    case 'RESET':
      return {
        ...currentState,
        count: 0
      };
    default:
      return currentState;
  }
};

//Dispatch function to trigger state updates
const dispatch = (action) => {
  state = reducer(state, action);
};

//Selector function to retrieve the current state
const getState = () => {
  return state;
};

export { dispatch, getState };

