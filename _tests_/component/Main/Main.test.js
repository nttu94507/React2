import React from 'react'
import {createStore} from 'redux'
import * as ReactRedux from 'react-redux'
import {render} from '@testing-library/react'
import {fireEvent} from '@testing-library/react'
import todoReducer from '../../../src/reducer/todolist'
import Main from '../../../src/component/Main'
import {Router} from 'react-router-dom'
import { createMemoryHistory } from 'history'
import {toBeInTheDocument,toBeTruthy} from '@testing-library/jest-dom'


const { Provider } = ReactRedux

const generateComponent =(component,initState)=>{
    const store = createStore(todoReducer,initState)
    const history = createMemoryHistory()
    return render(
        <Provider store={store}>
            <Router history={history}>
                {component}
            </Router>
        </Provider>
    )
}
 
describe('Main',()=> {
    test('Main_ClickTodoListLink_RenderTodoList',()=>{
        // const { getByTestId } = generateComponent(<Main />) 
        // expect(getByTestId('contentBlock')).toBeInTheDocument()
        // expect(getByTestId('todolistLink')).toBeInTheDocument()
        // const todolistLink = getByTestId('todolistLink')
        // const press1 = fireEvent.click(todolistLink)
        // expect(getByTestId('todolistBlock')).toBeInTheDocument()
        // const hoLink = getByTestId('homeLink')
        // fireEvent.click(hoLink)
        // expect(getByTestId('todolistLink')).toBeInTheDocument()
        // expect(getByTestId('contentBlock')).toBeInTheDocument()
       

    })
})