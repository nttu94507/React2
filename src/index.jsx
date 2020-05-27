import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import Content from './component/Content';
import TodoList from './component/TodoList';
// import { Switch, Route,Link,HashRouter, BrowserRouter} from 'react-router-dom';

const Main = () => (
    <div>
        <Content />
        <TodoList />
    </div>
)
ReactDom.render(<Provider store={store}><Main /></Provider> , document.getElementById('root'));