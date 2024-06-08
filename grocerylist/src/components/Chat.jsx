import React, { useEffect, useState } from 'react'
import Message from './Message'
import '../styles/Chat.css'
import YourMessage from './YourMessage'
import SendMessage from './SendMessage'
import { db, auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getDocs, collection, query, orderBy,onSnapshot,limit, } from 'firebase/firestore'

const Chat = () => {
    const [user] = useAuthState(auth);
    const [loading, setLoading] = useState(false)
    const checkIsFirst = (index)=>{
        if(index === 0)return true;
        if(messages[index-1].userId !== messages[index].userId)return true;
        return false;
    }
    const [messages, setMessages] = useState([])
    useEffect(()=>{
        const q = query(
            collection(db, "messages"),
            orderBy("time", "desc"),
            limit(50)
          );
      
          const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            const fetchedMessages = [];
            QuerySnapshot.forEach((doc) => {
              fetchedMessages.push({ ...doc.data(), id: doc.id });
            });
            const sortedMessages = fetchedMessages.sort(
              (a, b) => a.time - b.time
            );
            setMessages(sortedMessages);
          });
          return () => unsubscribe;
    },[])
  return (
        <div className='chatscreen'>
            <div className='messages'>
                {
                    (loading)?"Loading...":
                    messages.map((message, index)=>{
                        // console.log(message)
                        if(message.userId !== user.uid)return (<Message key={message.id} message={message} isFirst={checkIsFirst(index)}/>)
                        else return(<YourMessage key={message.id} message={message} isFirst={checkIsFirst(index)}/>)
                    })
                }  
            </div>
            <div className='send-message'>
                <SendMessage messages={messages} setMessages={setMessages}/>
            </div>

        </div>
  )
}

export default Chat