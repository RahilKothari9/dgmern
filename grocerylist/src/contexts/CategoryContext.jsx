import React, {useContext, useState, useEffect} from "react";
import {db} from '../firebase.js'
import { collection, getDocs } from "firebase/firestore";
const CategoryContext = React.createContext();
export function useCategory() {
    return useContext(CategoryContext);
}

export function CategoryProvider({children}) {
    const [currCategory, setCurrCategory] = useState({id:0, name:'Default'});
    const [categoryList, setCategoryList] = useState([]);
    const [loading, setLoading] = useState()
    useEffect(()=>{
        const fetchTasks = async()=>{
          setLoading(true);
          try {
            // const response = await axios.get('http://localhost:3000/tasks')
            // setTasks(response.data);
    
            const querySnapshot = await getDocs(collection(db, "categories"));
            const arr = [];
            querySnapshot.forEach((doc) => {
                arr.push({...doc.data(), firebaseId:doc.id});
              });
            setCategoryList(arr);
            
          }
          catch (err) {
            console.log(err);
          }
          finally {
            setLoading(false);
          }
        }
        fetchTasks();
      }, [])
    return (
        <CategoryContext.Provider value={{currCategory, setCurrCategory, categoryList, setCategoryList, loading}}>
            {children}
        </CategoryContext.Provider>
    )
}