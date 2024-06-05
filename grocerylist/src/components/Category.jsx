import React from 'react'
import '../styles/Category.css'
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCategory } from '../contexts/CategoryContext';

const Category = ({category, handleDelete, setIsMenuOpen}) => {
    const { setCurrCategory} = useCategory()
    const handleClick = ()=>{
        setCurrCategory(category);
        setIsMenuOpen(false);
    }
  return (
    <div className='category'>
      <div className='hitbox' onClick={()=>{handleClick()}}>
        <FolderIcon
            sx={{color: '#724af4!important'}}
        />
        <p className='categoryName'>{category.name}</p>
      </div>
        {category.name !== "Default" && <DeleteIcon onClick={()=>{handleDelete(category.id)}}/>}
        
    </div>
  )
}

export default Category