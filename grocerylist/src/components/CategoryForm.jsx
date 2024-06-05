import React, {useState} from 'react'
import '../styles/Category.css'
import FolderIcon from '@mui/icons-material/Folder';
import DoneIcon from '@mui/icons-material/Done';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

const CategoryForm = ({categoryList, setCategoryList, setAddCategory}) => {
    const [newCategory, setNewCategory] = useState('');
    const addCategory = async ()=>{
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
        try {
          // const response = await axios.post('http://localhost:3000/tasks', adderTask)
            const docRef = await(addDoc(collection(db, 'categories'), adderCategory));
            // console.log("Added Successfully")
            const updatedList = newList.map((item)=>{
                if(item.id === id)
                  {
                    return {...item, firebaseId: docRef.id};
                  }
                return item;
              })
              setCategoryList(updatedList);
        }
        catch(err)
        {
          console.log(err)
        }
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
            autoFocus
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