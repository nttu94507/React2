import React, {useState,useEffect,createContext,useContext}  from 'react';
import ReactDom from 'react-dom';
import Styles from './index.scss';
import PropTypes from 'prop-types';
import {Provider, useSelector,useDispatch} from 'react-redux'
import store from './store'
import { addTodo } from './action/todolist';


const TodoListContext = createContext();


const Task = (props) => {
    const { task } = props
    return <div>{task}</div>
}

Task.PropTypes ={
    task: PropTypes.string,
}

Task.defailtProps = {
    task: '',
}

const Todolist = () => {
    // const todolist = useContext(TodoListContext)
    const todolist = useSelector(state => state.todolist)
    return todolist.map(task => (
        <ul key={task}>
            <Task task={task} />
        </ul>
    ))
}

const Main = () => {
    const dispatch = useDispatch()
    const todolist = useSelector(state => state.todolist)
    const [newTodo, setNewTodo] = useState('')
    return(
            <div>
                <span>{`代辦事項數:${todolist.length}`}</span>
                <div>
                    <input value={newTodo} onChange={(e) => {setNewTodo(e.target.value)}} />
                    <button type="button" onClick={() => {dispatch(addTodo(newTodo))}}>新增事項</button>
                </div>
                <TodoListPage  />
                <CurrenTask  />
            </div> 
    )
}

const TodoListPage = () =>{
    return (
        <div>
            <div>其他內容</div>
            <Todolist />
        </div>
    )
}

const CurrenTask = () => {
    // const  todolist  = useContext(TodoListContext)
    const todolist = useSelector(state => state.todolist)
    return <div>{`下一件事情:${todolist[0]}`}</div>
}



ReactDom.render(<Provider store={store}><Main /></Provider> , document.getElementById('root'));