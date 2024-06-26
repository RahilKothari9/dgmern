import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import axios from 'axios'
import { collection, getDocs, where } from "firebase/firestore"; 
import {db,auth} from './firebase.js'
import Menu from './components/Menu.jsx'
import { useCategory } from './contexts/CategoryContext.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup.jsx'
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from './components/Chat.jsx'


function App() {
  const [tasks, setTasks] = useState([])
  const {currCategory} = useCategory();
  const [loading, setLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [chat, setChat] = useState(false);
  const [user] = useAuthState(auth)
  useEffect(()=>{
    const fetchTasks = async()=>{
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "tasks"));
        const arr = [];
        querySnapshot.forEach((doc) => {
            arr.push({...doc.data(), firebaseId:doc.id});
          });
        setTasks(arr);
        setTaskList(arr);
        
      }
      catch (err) {
        console.log(err);
      }
      finally {
        setLoading(false);
      }
    }
    fetchTasks();
  }, [])

  

  return (
    <>
    <Router>
      <Routes>
        <Route exact path = '/' element={<>
          <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} chat={chat} setChat={setChat}/>
          <Content tasks={tasks} setTasks={setTasks} style={{margin: 'auto'}} loading={loading}/>
          {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>}
        </>}/>
        <Route exact path = '/chat' element={<>
          <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} chat={true} setChat={setChat}/>
          {(user)?<Chat/>:
           <Signup/>}
        </>}/>

      </Routes>
    </Router>
      
    </>
  )
}

export default App
