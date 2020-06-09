import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addTodo } from '../../action/todolist';

const Task = (props) => {
    const { task } = props
    return (
        <li>
         <Link to={`/list/${task}`}>
             {task}
         </Link>
        </li>
    )
}

Task.PropTypes ={
    task: PropTypes.string,
}

Task.defailtProps = {
    task: '',
}

const Todolist = () => {
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

export default Main