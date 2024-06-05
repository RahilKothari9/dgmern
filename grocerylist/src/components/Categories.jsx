import React, {useState} from 'react'
import '../styles/Categories.css'
import AddIcon from '@mui/icons-material/Add';
import Category from './Category';
import CategoryForm from './CategoryForm';
import CancelIcon from '@mui/icons-material/Cancel';

const Categories = ({setIsMenuOpen}) => {
    const [addCategory, setAddCategory] = useState(false);
    const [categoryList, setCategoryList] = useState([{id:1, name: "Category 1"},{id:2, name: "Category 2"},]);
    const handleDelete = async (id)=>{
        const newCategoryList = categoryList.filter((item)=>{return (item.id !== id)});
        setCategoryList(newCategoryList)
        // try {
        //     // const response = await axios.delete(`http://localhost:3000/tasks/${id}`);
        //     deleteDoc(doc(db, "tasks", id))
        // }
        // catch (err) {
        //     console.log(err);
        // }
    }
    return (
    <div className='modal-content'>
        <div className='st-container'>
            <h4 className='modal-subtitle'>Categories</h4>
            {!addCategory && categoryList.length < 9 && <AddIcon onClick={()=>{setAddCategory(!addCategory)}}/>}
            {addCategory &&<CancelIcon onClick={()=>{setAddCategory(!addCategory)}}/>}
        </div>
        
        <div className='categories'>
            <Category key={0} category={{id: 0, name: "Default"}} setIsMenuOpen={setIsMenuOpen}/>
            {
                categoryList.map((category)=>{
                    return (<Category key={category.id} category={category} handleDelete={handleDelete} setIsMenuOpen={setIsMenuOpen}/>)
                })
            }
            {addCategory && <CategoryForm categoryList={categoryList} setCategoryList={setCategoryList} setAddCategory={setAddCategory}/>}
        </div>
    </div>
  )
}

export default Categories