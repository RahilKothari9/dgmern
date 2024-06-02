import React from 'react'
import "../styles/Header.css"
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <div className='header'>
        <div className='titleContainer'>
            <h2 className='title first'>to</h2>
            <h2 className='title second'>do.</h2>
        </div>
        <MenuIcon style={{color: "#e0e1fb", fontSize: "2em", marginTop:"0.1em"}}/>
    </div>
  )
}

export default Header