import React from 'react'

const Topbar = ({section, setSection}) => {
  return (
    <div className='topbar'>
        <button className='topbutton' onClick={()=>{setSection('users')}} style={{backgroundColor: (section==='users')? 'black': 'gray', color: (section==='users')? 'white': 'black'}}>Users</button>
        <button className='topbutton' onClick={()=>{setSection('posts')}} style={{backgroundColor: (section==='posts')? 'black': 'gray', color: (section==='posts')? 'white': 'black'}}>Posts</button>
        <button className='topbutton' onClick={()=>{setSection('comments')}} style={{backgroundColor: (section==='comments')? 'black': 'gray', color: (section==='comments')? 'white': 'black'}}>Comments</button>
    </div>
  )
}

export default Topbar