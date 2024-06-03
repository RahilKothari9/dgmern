import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'

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

  return (
    <>
      <Header/>
      <Content tasks={tasks} setTasks={setTasks} style={{margin: 'auto'}}/>
    </>
  )
}

export default App
