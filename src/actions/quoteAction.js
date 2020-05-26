import {NEW_QUOTE} from './types';
import axios from 'axios';

export function fetchQuote() {
  return function(dispatch) {
    axios.get('https://api.quotable.io/random')
    .then(res => dispatch({
      type: NEW_QUOTE,
      payload: res.data
    }));
  }
}
