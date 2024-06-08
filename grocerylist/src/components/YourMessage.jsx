import React from 'react'
import '../styles/Message.css'

const YourMessage = ({message, isFirst}) => {
    const date = message.time.toDate()
    const hoursOnly = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');

  return (
    <>
    {isFirst && <div className='padder'/>}
    <div className='right-aligner'>
    <div className='right-message'>
       
        <div className='left-section'>
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
        <div className='profile-pic'>
            {isFirst &&<img src={message.photo}></img>}
        </div>
    </div>
    </div>
    </>
  )
}

export default YourMessage