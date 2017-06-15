import { INCREMENT_COUNTER, DECREMENT_COUNTER, INCREMENT_COUNTER_IF_ODD } from '../constants/ActionTypes'

const initialState = 0

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1
    case DECREMENT_COUNTER:
      return state - 1
  	case INCREMENT_COUNTER_IF_ODD:
      if(state % 2 === 0)
  	    return state;
  	  else
  		  return state + 1;
    default:
      return state
  }
}
