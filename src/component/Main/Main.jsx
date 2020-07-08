import React from 'react'
import { Switch, Route ,Link} from 'react-router-dom'
import {Content} from '../Content'
import {Todolist} from '../TodoList'
import {List} from '../List'
import {Redirect} from '../Redirect'

const Main =() =>(
    <div data-testid="contentBlock">
        <ul>
            <li><Link to='/'>首頁</Link></li>
            <li><Link to='/todolist'>待辦事項</Link></li>
            <li><a href='http://192.168.10.186:8001'>宜蘭縣政府</a></li>

        </ul>
        <Switch>
            <Route exact path='/' component={Content} />
            <Route path='/todolist' component={Todolist} />
            <Route path='/list/:taskName' component={List} />
            <Route path='/Yilan' component={Redirect} loc='http://192.168.10.186:8001'/>
        </Switch>
    </div>
)

export default Main
