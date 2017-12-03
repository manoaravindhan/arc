import { LOAD_DATA } from '../constants/ActionTypes'

const initialState = {
  content: [{
    id: 0,
    name: 'John Smith',
    gender: 'Male',
  }],
}

const grid = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        content: action.payload,
      }
    default:
      return state
  }
}

export default grid
