import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import axios from 'axios'
import { collection, getDocs } from "firebase/firestore"; 
import {db} from './firebase.js'

function App() {
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "name": "Task 1",
      "isChecked": false
    },
    {
      "id": 2,
      "name": "Task 2",
      "isChecked": true
    },
    {
      "id": 3,
      "name": "Task 3",
      "isChecked": false
    },
    {
      "id": 4,
      "name": "Task 4",
      "isChecked": false
    }
  ])

  const [loading, setLoading] = useState(false);
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
      <Header/>
      <Content tasks={tasks} setTasks={setTasks} style={{margin: 'auto'}} loading={loading}/>
    </>
  )
}

export default App
