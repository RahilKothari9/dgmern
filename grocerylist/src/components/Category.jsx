import React from 'react'
import '../styles/Category.css'
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
const Category = ({category, handleDelete}) => {
    
  return (
    <div className='category'>
        <FolderIcon
            sx={{color: '#724af4!important'}}
        />
        <p className='categoryName'>{category.name}</p>
        {category.name !== "Default" && <DeleteIcon onClick={()=>{handleDelete(category.id)}}/>}
        
    </div>
  )
}

export default Category