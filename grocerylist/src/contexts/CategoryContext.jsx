import React, {useContext, useState, useEffect} from "react";

const CategoryContext = React.createContext();
export function useCategory() {
    return useContext(CategoryContext);
}

export function CategoryProvider({children}) {
    const [currCategory, setCurrCategory] = useState({id:0, name:'Default'});

    return (
        <CategoryContext.Provider value={{currCategory, setCurrCategory}}>
            {children}
        </CategoryContext.Provider>
    )
}