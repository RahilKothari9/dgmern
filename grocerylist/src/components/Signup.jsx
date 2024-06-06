import React from 'react'
import "../styles/Signup.css"
import GoogleIcon from '@mui/icons-material/Google';
import { auth } from '../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Signup = () => {
  // const [user] = useAuthState(auth);
  const googleSignIn = () => {
    console.log("Hi")
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  const signOut = () => {
    auth.signOut();
  };
  return (
    
    <div className='signup'>
      <div className='image-container'>
        <img src={"/static/chat-backdrop.svg"} className='image'></img>
        </div>
        <div className='signup-button' onClick={()=>{googleSignIn()}}>
            <p className='signup-text'>Signup with Google</p>
            <GoogleIcon/>
        </div>
    </div>
  )
}

export default Signup