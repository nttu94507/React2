import React,{useState} from 'react'
import { eventChannel } from 'redux-saga'


const NewMessageFrom =({onSend}) => {
    const [inputText, setInputText] =useState('')

    const handleTextChange = event =>{
        setInputText(event.target.value)
    }
    const handleSend = () => {
        onSend(inputText);
        setInputText('');
    };

    return (
        
        <div>
            <input type="text" data-testid="messageText" value={inputText} onChange={handleTextChange} />
            <button data-testid="sendButton" onClick={handleSend}>發送</button>
        </div> 
    )
}
export default NewMessageFrom