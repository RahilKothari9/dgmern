import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import '../styles/SendMessage.css'
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Timestamp, addDoc, collection } from 'firebase/firestore';

const SendMessage = ({messages, setMessages}) => {
  const [newMessage, setNewMessage] = useState('')
  const [user] = useAuthState(auth)
  const addMessage = async ()=>{
    if(newMessage === '')return;
    console.log(user)
    const newObj = {content:newMessage, time: Timestamp.now(), userId:user.uid, name:user.displayName, photo:user.photoURL}
    const updArr = [...messages, newObj]
    setMessages(updArr);
    setNewMessage('')
    try {
        const docRef = await(addDoc(collection(db, 'messages'), newObj));
        updArr[updArr.length-1].id = docRef.id;
        setMessages(updArr)
    }
    catch(err)
    {
      console.log(err)
    }
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