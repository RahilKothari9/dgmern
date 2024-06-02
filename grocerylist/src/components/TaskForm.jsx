import React from 'react'
import { useState } from 'react'
import '../styles/TaskForm.css'
import AddTaskIcon from '@mui/icons-material/AddTask';
import { Button } from '@mui/material';

const TaskForm = ({tasks, setTasks}) => {
    const [newTask, setNewTask] = useState('');
    const AddTask = ()=>{
        const id = tasks.length? tasks[tasks.length-1].id+1: 1;
        const adderTask= {id, isChecked: false, name:newTask}
        const newList = [...tasks, adderTask];
        setTasks(newList)
    }
  return (
    <form className='taskform' onSubmit={(e)=>{e.preventDefault()}}>
        <input
            placeholder='Add a Task'
            required
            value={newTask}
            onChange={(e)=>{setNewTask(e.target.value)}}
            className='input'
        ></input>
        <button className='button' onClick={()=>{AddTask()}}><AddTaskIcon onClick={()=>{AddTask}}/></button>
    </form>
  )
}

export default TaskForm