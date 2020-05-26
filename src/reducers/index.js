import {combineReducers} from 'redux';
import newQuote from './quoteReducer';

export default combineReducers({
  qRed: newQuote
});
