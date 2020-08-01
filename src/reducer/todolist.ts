import * as actions from '../action/todolist';
import { call, put, takeEvery } from 'redux-saga/effects';

const initState = {
    todolist:['第一件事情','第二件事情']
}
const todoReducer = (state = initState, action) =>{
    switch (action.type) {
        case actions.ADD_TODO:
            return {
                ...state,
                todolist:[
                    ...state.todolist,
                    action.payload.todo,
                ],
            }
        case actions.FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
            };
        default:
            return state
    }
}
  
  export default todoReducer;