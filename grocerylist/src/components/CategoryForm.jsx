import React, {useState} from 'react'
import '../styles/Category.css'
import FolderIcon from '@mui/icons-material/Folder';
import DoneIcon from '@mui/icons-material/Done';

const CategoryForm = ({categoryList, setCategoryList, setAddCategory}) => {
    const [newCategory, setNewCategory] = useState('');
    const addCategory = ()=>{
        console.log(categoryList)
        if(newCategory.length === 0)return;
        if(newCategory === "Default")
        {
            setAddCategory(false);
            return;
        }
        const id = categoryList.length? categoryList[categoryList.length-1].id+1: 1;
        const adderCategory= {id,  name:newCategory}
        const newList = [...categoryList, adderCategory];
        setCategoryList(newList)
        setAddCategory(false)
        // try {
        //   // const response = await axios.post('http://localhost:3000/tasks', adderTask)
        //     const docRef = await(addDoc(collection(db, 'tasks'), adderTask));
        // }
        // catch(err)
        // {
        //   console.log(err)
        // }
    }
    
  return (
    <div className='category'>
        <FolderIcon
            sx={{color: '#724af4!important'}}
        />
        <form className='categoryform' onSubmit={(e)=>{e.preventDefault()}}>
        <input
            placeholder='Add a Category'
            required
            autofocus
            value={newCategory}
            onChange={(e)=>{setNewCategory(e.target.value)}}
            className='cf-input'
        ></input>
        <button className='cf-button' onClick={()=>{addCategory()}}><DoneIcon/></button>
    </form>
        
    </div>
  )
}

export default CategoryForm