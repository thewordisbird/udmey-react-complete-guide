const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
  // Takes in state, returns updated state
  if (action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1
    }
  }

  if (action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value
    }
  }
  return state;
}

// Store
// A store needs to be initialized with a reducer
const store = createStore(rootReducer);
console.log(store.getState())

// Subscription
// Inform when state changes
// take arg, function when state changes
store.subscribe(() => {
  console.log('[Subscription]', store.getState());
});


// Dispatching Actions
// All actions must include a type key, can add any additional properties
store.dispatch({type: 'INC_COUNTER' });
store.dispatch({type: 'ADD_COUNTER', value: 10});

console.log(store.getState())

