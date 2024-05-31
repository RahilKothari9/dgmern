import React from 'react'

const ColourInput = ({colour, setColour}) => {
  return (
    <form onSubmit={(e)=>{e.preventDefault()}}>
        <input
          autofocus
            placeholder='Add colour name'
            value={colour}
            onChange={(e)=>{setColour(e.target.value)}}
            className='input-field'
            required
        >
        </input>
    </form>
  )
}

export default ColourInput