import React from 'react'
import Modal from '@mui/material/Modal';
import { Fade, Backdrop } from '@mui/material';
import "../styles/Menu.css"
import CloseIcon from '@mui/icons-material/Close';
import Categories from './Categories';


const Menu = ({isMenuOpen, setIsMenuOpen}) => {
  return (
    <Modal
        open={isMenuOpen}
        onClose={()=>{setIsMenuOpen(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        sx={{ 
            "& > .MuiBackdrop-root" : {
                    backdropFilter: "blur(1.2px)", marginRight: -10
                  }
            }}
        
        
    >
        <div className='modal'>
            <div className='top'><CloseIcon style={{color: "#e0e1fb", fontSize: "2em", marginTop:"0.1em"}} onClick={()=>{setIsMenuOpen(!isMenuOpen)}}/></div>
            <Categories/>
        </div>
    </Modal>
  )
}

export default Menu