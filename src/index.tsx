import React,{useState} from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import { HashRouter} from 'react-router-dom'
import Main from './component/Main'
import styles from './index.scss'
import App from './component/App'
import MessageList from './component/MessageList'


ReactDom.render(
    <Provider store={store}>
        <HashRouter>
            <div className={styles.mainBlock}>
                <Main />
            </div>
        </HashRouter>
    </Provider> 
, document.getElementById('root'));