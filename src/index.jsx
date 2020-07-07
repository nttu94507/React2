import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import { HashRouter} from 'react-router-dom';
import Main from './component/Main'

ReactDom.render(<Provider store={store}><HashRouter><Main /></HashRouter></Provider> , document.getElementById('root'));