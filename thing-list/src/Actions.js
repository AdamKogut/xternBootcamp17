import React from 'react'

const Actions=({thing,saveThing,removeThing})=>{
  return(
    <span className="actions">
        <button className="remove" onClick={()=>removeThing(thing)}>
            <i className="fa fa-trash-o"></i>
        </button>
    </span>
  )
}
export default Actions