import React from 'react'
import '../styles/Message.css'

const YourMessage = ({message, isFirst}) => {
  return (
    <>
    {isFirst && <div className='padder'/>}
    <div className='right-aligner'>
    <div className='right-message'>
       
        <div className='left-section'>
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
        <div className='profile-pic'>
            {isFirst &&<img src='./static/chat-backdrop.svg'></img>}
        </div>
    </div>
    </div>
    </>
  )
}

export default YourMessage