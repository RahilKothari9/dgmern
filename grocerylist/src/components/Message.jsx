import React from 'react'
import '../styles/Message.css'
import { Timestamp } from 'firebase/firestore'

const Message = ({message, isFirst}) => {
    const date = message.time.toDate()
    const hoursOnly = date.getHours();
    const minutes = date.getMinutes();
  return (
    <>
    {isFirst && <div className='padder'/>}
    <div className='message'>
        <div className='profile-pic'>
            {isFirst &&<img src={message.photo}></img>}
        </div>
        <div className='right-section'>
           {isFirst&& <div className='sender-name'>
                {message.name}
            </div>}
            <div className='message-content'>
                {message.content}
            </div>
            <div className='timestamp'>
                {hoursOnly}:{minutes}
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Message