import React from 'react'
import { Switch, Route ,Link} from 'react-router-dom'
import Content from '../Content'
import todo from '../TodoList'
import List from '../List'
import About from '../About'


const Main =() =>(
    <div>
        <ul>
            <li><Link to="/" data-testid="homeLink">首頁</Link></li>
            <li><Link to="/todolist" data-testid="todolistLink">待辦事項</Link></li>
            <li><Link to="/about" >關於</Link></li>
        </ul>
        <Switch>
            <Route exact path='/' component={Content} />
            <Route path='/todolist' component={todo} />
            <Route path='/list/:taskName' component={List} />
            <Route path='/about' component={About} />
        </Switch>
    </div>
)

export default Main
