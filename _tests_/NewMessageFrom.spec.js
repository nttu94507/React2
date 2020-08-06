import React from 'react'
import {render,fireEvent,cleanup, getByTestId} from '@testing-library/react'
import NewMessageFrom from '../src/component/NewMessageFrom'

describe ('<NewMessage />',()=> {
    let getByTestId

    afterEach(cleanup)

    describe('clinking the send button', () =>{
        let sendHandler

        beforeEach(()=>{
           sendHandler = jest.fn()
            ({getByTestId} = render(<NewMessageFrom onSend={sendHandler} />))

            fireEvent.change(
                getByTestId('messageText'),{target:{value:'New message'}}
            )
            fireEvent.click(getByTestId('sendButton'))
        })
        it('clears the text field',()=> {
            expect(getByTestId('messageText').value).toEqual('')
        })

        it('calls the send handler', () =>{
            expect(sendHandler).toHaveBeenCalledWith('New message')
        })
    })
})