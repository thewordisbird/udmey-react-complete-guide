import { INCREMENT, DECREMENT, ADD, SUBTRACT } from './actionTypes'

// Action creators. The process for handling async processes in redux (Can also be used for synchronous code)
export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}

export const add = (val) => {
  return {
    type: ADD,
    val: val
  }
}

export const subtract = (val) => {
  return {
    type: SUBTRACT,
    val: val
  }
}