import * as actionTypes from './actions';

const initialState = {
  persons: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.payload.name,
        age: action.payload.age
      }
      return { 
        persons: state.persons.concat(newPerson)}
    
    case actionTypes.DELETE_PERSON:
      const newPersons = state.persons.filter(person => person.id !== action.id)
      console.log('[newPersons]', newPersons)
      return {
        persons: [...newPersons]
      }
    default:
      return state;
  }
}

export default reducer;