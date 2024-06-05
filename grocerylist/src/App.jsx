import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import axios from 'axios'
import { collection, getDocs } from "firebase/firestore"; 
import {db} from './firebase.js'
import Menu from './components/Menu.jsx'

function App() {
  const [tasks, setTasks] = useState([])

  const [loading, setLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(()=>{
    console.log(tasks);
    const fetchTasks = async()=>{
      setLoading(true);
      try {
        // const response = await axios.get('http://localhost:3000/tasks')
        // setTasks(response.data);

        const querySnapshot = await getDocs(collection(db, "tasks"));
        const arr = [];
        querySnapshot.forEach((doc) => {
            arr.push({...doc.data(), id:doc.id});
          });
        setTasks(arr);
        
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
      <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>
      <Content tasks={tasks} setTasks={setTasks} style={{margin: 'auto'}} loading={loading}/>
      {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>}
    </>
  )
}

export default App
