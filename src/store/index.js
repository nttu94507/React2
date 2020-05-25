import {applyMiddleware,createStore } from 'redux';
import todoReducer from '../reducer/todolist';
import logger from 'redux-logger';


const store = createStore(
    todoReducer, applyMiddleware(logger),
  );

export default store;