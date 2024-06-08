import React, { useState, } from 'react'
import SendIcon from '@mui/icons-material/Send';
import '../styles/SendMessage.css'
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Timestamp, addDoc, collection } from 'firebase/firestore';

const SendMessage = ({messages, setMessages, scroll}) => {
  const [newMessage, setNewMessage] = useState('')
  const [user] = useAuthState(auth)
  const [pause, setPause] = useState(false)
  const addMessage = async ()=>{
    if(newMessage === '')return;
    setPause(true)
    const newObj = {content:newMessage, time: Timestamp.now(), userId:user.uid, name:user.displayName, photo:user.photoURL}
    setNewMessage('')
    const updArr = [...messages, newObj]
    setMessages(updArr);
    // setImmediate(() => ref.current.scrollIntoView({ inline: "center", }));
    try {
        const docRef = await(addDoc(collection(db, 'messages'), newObj));
        updArr[updArr.length-1].id = docRef.id;
        setMessages(updArr)
    }
    catch(err)
    {
      console.log(err)
    }
    finally {
      
      setPause(false);
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
        <button className='button' onClick={()=>{addMessage()}}><SendIcon/></button>
    </form>
  )
}

export default SendMessage