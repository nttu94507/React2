import React, {useState,useEffect,createContext,useContext}  from 'react';
import ReactDom from 'react-dom';
import Styles from './index.scss';
import PropTypes from 'prop-types';
import {Provider, useSelector} from 'react-redux'
import store from './store'


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
    // const [todolist] = useState(['first','second',"1"])
    const todolist = useSelector(state => state.todolist)
    return(
            <div>
                <span>{`代辦事項數:${todolist.length}`}</span>
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