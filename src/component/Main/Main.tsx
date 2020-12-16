import React from 'react'
import { Switch, Route ,Link} from 'react-router-dom'
import Content from '../Content'
import todo from '../TodoList'
import List from '../List'
import About from '../About'
import Pos from '../Pos'
import styles from '../../index.scss'
import Home from '../Home'
import Header from '../Header'


const Main =() =>(
    <div >
        <div className={styles.container}>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/content' component={Content} />
                <Route path='/todolist' component={todo} />
                <Route path='/list/:taskName' component={List} />
                <Route exact path='/about' component={About} />
            </Switch>
        </div>
    </div>
)

export default Main
