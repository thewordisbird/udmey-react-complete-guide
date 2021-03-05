import * as actionTypes from '../actions'

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        results: [...state.results, {id: new Date().toISOString(), value: action.result}]
      }

    case actionTypes.DELETE_RESULT:
      const newResults = state.results.filter((result) => result.id !== action.id ) 
      return {
        results: newResults
      }

    default:
      return state;
  }
}

export default reducer;