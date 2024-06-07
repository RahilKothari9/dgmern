import React, { useState } from 'react'
import Message from './Message'
import '../styles/Chat.css'
import YourMessage from './YourMessage'
import SendMessage from './SendMessage'

const Chat = () => {
    const [messages, setMessages] = useState([{id:1, content:'hello my name is rahil kothari, and im working on a react firebase app to revise my concepts'},{id:2, content:'bye'},{id:3, content:':('}])
  return (
        <div className='chatscreen'>
            <div className='messages'>
                {
                    messages.map((message)=>{
                        if(message.id === 1 || message.id === 3)return (<Message key={message.id} message={message} isFirst={true}/>)
                        else return(<YourMessage key={message.id} message={message} isFirst={true}/>)
                    })
                }  
            </div>
            
                <SendMessage messages={messages} setMessages={setMessages}/>
            
        </div>
  )
}

export default Chat