import React from 'react'

function ActionButton(props) {
  return (
    <button className='action-button' id={props.id}><p className='lead-text'>{props.label}</p></button>
  )
}

export default ActionButton