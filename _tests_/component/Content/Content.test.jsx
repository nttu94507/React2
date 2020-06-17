import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { render, fireEvent } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom'
import Content from '../../../src/component/Content'
import reducer from '../../../src/reducer/todolist'

describe('Content', ()=> {
    test('Contest_Check_Render', () =>{
        const store = createStore(reducer);
        const {getByTestId} = render(<Provider store={store} ><Content /></Provider>)
        expect(getByTestId('contentBlock')).toBeInTheDocument()
    })
})