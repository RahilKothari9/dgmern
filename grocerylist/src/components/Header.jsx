import React from 'react'
import "../styles/Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const Header = ({setIsMenuOpen, isMenuOpen, chat, setChat}) => {
  const navigate = useNavigate();
  const handleClick = ()=>{
      if(chat)
      {
        setChat(false);
        navigate('/')
      }
      else
      {
        setChat(true);
        navigate('/chat')
      }
    
  }
  return (
    <div className='header'>
        <div className='titleContainer'>
            <h2 className='title first' onClick={()=>{handleClick()}}>two</h2>
            <h2 className='title second' onClick={()=>{handleClick()}}>{(chat)?"chat.":"do."}</h2>
        </div>
        {!isMenuOpen && !chat && <MenuIcon style={{color: "#e0e1fb", fontSize: "2em", marginTop:"0.1em"}} onClick={()=>{setIsMenuOpen(!isMenuOpen)}}/>}
    </div>
  )
}

export default Header