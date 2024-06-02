import React from 'react'
import '../styles/Content.css'
import Task from './Task'
import TaskForm from './TaskForm'
const Content = ({tasks, setTasks}) => {
    
    const handleCheck = (id)=>{
        const newTasks = tasks.map((item)=>{return (item.id === id)? {...item, isChecked: !item.isChecked} : item});
        setTasks(newTasks)
    }
    const handleDelete = (id)=>{
        const newTasks = tasks.filter((item)=>{return (item.id !== id)});
        setTasks(newTasks)
    }
  return (
    <div className='content'>
        <h4 className='subtitle'>Tasks</h4>
        <div className='tasks'>
        {
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