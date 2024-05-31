import React from 'react'

const Square = ({colour}) => {
  return (
    <div className='square' style={{backgroundColor: colour}}>
        {(colour === '')? 'Empty Value' : colour}
    </div>
  )
}

export default Square