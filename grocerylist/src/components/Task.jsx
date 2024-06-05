import React from 'react'
import '../styles/Task.css'
import Checkbox from '@mui/material/Checkbox';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Task = ({task, handleCheck, handleDelete}) => {
    
  return (
    <div className='task'>
        <Checkbox 
            checked={task.isChecked}
            onChange={()=>{handleCheck(task.firebaseId)}}
            sx={{color: '#724af4!important'}}
        />
        
        <p className='taskName'>{task.name}</p>
        <RemoveCircleOutlineIcon onClick={()=>{handleDelete(task.firebaseId)}}/>
    </div>
  )
}

export default Task