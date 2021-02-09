import { combineReducers } from "redux";
import apireducer from './APIReducers'

const rootreducer = combineReducers({
  trivia : apireducer
});

export default rootreducer;
