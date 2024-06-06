import React from 'react'
import "../styles/Signup.css"
import GoogleIcon from '@mui/icons-material/Google';

const Signup = () => {
  return (
    
    <div className='signup'>
      <div className='image-container'>
        <img src={"./public/chat-backdrop.svg"} className='image'></img>
        </div>
        <div className='signup-button'>
            <p className='signup-text'>Signup with Google</p>
            <GoogleIcon/>
        </div>
    </div>
  )
}

export default Signup