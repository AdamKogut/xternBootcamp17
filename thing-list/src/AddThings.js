import React from 'react'

import './AddThings.css'

const AddThings = ({ addThing }) => {
  return (
    <button 
      className="add-thing"
      onClick={addThing}
    >
      Add Thing
    </button>
  )
}

export default AddThings