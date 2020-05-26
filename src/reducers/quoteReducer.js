import {NEW_QUOTE} from '../actions/types';

const initialState = {
  quoteData: {}
}

const newQuote = (state = initialState, action) => {
  switch(action.type) {
    case NEW_QUOTE:
      return {
        quoteData: action.payload
      }
    default:
      return state;
  }
}

export default newQuote;
