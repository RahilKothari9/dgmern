import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import '../styles/SendMessage.css'

const SendMessage = ({messages, setMessages}) => {
  const [newMessage, setNewMessage] = useState('')
  const addMessage = ()=>{
    if(newMessage === '')return;
    const id = (messages.length === 0)?1:messages[messages.length - 1].id+1;
    const newObj = {id, content:newMessage}
    const updArr = [...messages, newObj]
    setMessages(updArr);
    setNewMessage('')
  }

  return (
    <form className='message-form' onSubmit={(e)=>{e.preventDefault()}}>
        <input
            placeholder='Message'
            value={newMessage}
            onChange={(e)=>{setNewMessage(e.target.value)}}
            className='input'
        ></input>
        <button className='button' onClick={()=>{addMessage()}}><SendIcon onClick={()=>{addMessage()}}/></button>
    </form>
  )
}

export default SendMessage