import React from 'react'
import '../styles/Message.css'

const Message = ({message, isFirst}) => {
  return (
    <>
    {isFirst && <div className='padder'/>}
    <div className='message'>
        <div className='profile-pic'>
            {isFirst &&<img src='./static/chat-backdrop.svg'></img>}
        </div>
        <div className='right-section'>
           {isFirst&& <div className='sender-name'>
                Rahil Kothari
            </div>}
            <div className='message-content'>
                {message.content}
            </div>
            <div className='timestamp'>
                1:13 pm
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Message