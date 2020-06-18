import React from 'react'
import {createStore} from 'redux'
// import {Provider} from 'react-redux'
import { render, fireEvent } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom'
import Content from '../../../src/component/Content'
import reducer from '../../../src/reducer/todolist'
import * as ReactRedux from 'react-redux';

const { Provider } = ReactRedux;

describe('Content', ()=> {
    test('Contest_Check_Render', () =>{
        const store = createStore(reducer);
        const {getByTestId} = render(<Provider store={store} ><Content /></Provider>)
        expect(getByTestId('contentBlock')).toBeInTheDocument()
    })
    test('Content_Click_ExecuteDispath', () =>{
        const store = createStore(reducer);
        const mockDispatch = jest.fn();
        const mockUseDispatch = jest.spyOn(ReactRedux, 'useDispatch')
        mockUseDispatch.mockReturnValue(mockDispatch);
        const {getByTestId} = render(<Provider store={store} ><Content /></Provider>)
        const fetchContentDataBtn = getByTestId('fetchContentDataBtn');
        fireEvent.click(fetchContentDataBtn);
        expect(mockDispatch.mock.calls[0][0]).toEqual({ type: 'FETCH_DATA_BEGIN' });
    })
})