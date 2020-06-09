import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import Content from './component/Content';
import TodoList from './component/TodoList';
import { Route, Switch,Link,BrowserRouter,HashRouter} from 'react-router-dom';


const Main = () => (
    <div>
        <Link to="/">首頁</Link>
        <Link to="/todolist">待辦事項</Link>
        <hr></hr>
        <Switch>
            <Route exact path="/" component ={Content}/>
            <Route  path="/todolist" component ={TodoList}/>
        </Switch>
    </div>
)
ReactDom.render(<Provider store={store}><HashRouter><Main /></HashRouter></Provider> , document.getElementById('root'));