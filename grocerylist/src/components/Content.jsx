import React from 'react'
import '../styles/Content.css'
import Task from './Task'
import TaskForm from './TaskForm'
import axios from 'axios'
import { db } from '../firebase'
import { doc, updateDoc,deleteDoc} from "firebase/firestore"; 
import { useCategory } from '../contexts/CategoryContext'

const Content = ({tasks, setTasks, loading}) => {
    
    const handleCheck = async (id)=>{
        const newTasks = tasks.map((item)=>{return (item.firebaseId === id)? {...item, isChecked: !item.isChecked} : item});
        const myItem = tasks.filter((item)=>{return (item.firebaseId === id)});
        
        setTasks(newTasks)
        try {
            // const response = await axios.patch(`http://localhost:3000/tasks/${id}`, {isChecked: !myItem[0].isChecked})
           
            updateDoc(doc(db, "tasks", id), {isChecked: !myItem[0].isChecked})
            // console.log(tasks);
        }
        catch (err){
            console.log(err)
        }
    }
    const handleDelete = async (id)=>{
        const newTasks = tasks.filter((item)=>{return (item.firebaseId !== id)});
        setTasks(newTasks)
        try {
            // const response = await axios.delete(`http://localhost:3000/tasks/${id}`);
            deleteDoc(doc(db, "tasks", id))
        }
        catch (err) {
            console.log(err);
        }
    }

    const {currCategory} = useCategory();
  return (
    <div className='content'>
        <h4 className='subtitle'>Tasks{currCategory.name !== 'Default' && `/${currCategory.name}`}</h4>
        <div className='tasks'>
        {
            (loading)? "Tasks are loading...":
            tasks.map((task)=>{
                if(currCategory.id === 0 || currCategory.id === task.categoryId)return (<Task task={task} key={task.firebaseId} handleCheck={handleCheck} handleDelete={handleDelete}/>)
            })
        }
        </div>
        <TaskForm tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default Content