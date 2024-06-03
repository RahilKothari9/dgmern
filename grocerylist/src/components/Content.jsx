import React from 'react'
import '../styles/Content.css'
import Task from './Task'
import TaskForm from './TaskForm'
import axios from 'axios'

const Content = ({tasks, setTasks, loading}) => {
    
    const handleCheck = async (id)=>{
        const newTasks = tasks.map((item)=>{return (item.id === id)? {...item, isChecked: !item.isChecked} : item});
        const myItem = tasks.filter((item)=>{return (item.id === id)});
        setTasks(newTasks)
        try {
            const response = await axios.patch(`http://localhost:3000/tasks/${id}`, {isChecked: !myItem[0].isChecked})
        }
        catch (err){
            console.log(err)
        }
    }
    const handleDelete = async (id)=>{
        const newTasks = tasks.filter((item)=>{return (item.id !== id)});
        setTasks(newTasks)
        try {
            const response = await axios.delete(`http://localhost:3000/tasks/${id}`);
        }
        catch (err) {
            console.log(err);
        }
    }
  return (
    <div className='content'>
        <h4 className='subtitle'>Tasks</h4>
        <div className='tasks'>
        {
            (loading)? "tasks are loading...":
            tasks.map((task)=>{
                return (<Task task={task} key={task.id} handleCheck={handleCheck} handleDelete={handleDelete}/>)
            })
        }
        </div>
        <TaskForm tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default Content