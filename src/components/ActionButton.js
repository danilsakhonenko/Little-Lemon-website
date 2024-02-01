import React from 'react'
import { Link } from 'react-router-dom'

function ActionButton(props) {
  return (
    <button onClick={props.onClick} className='action-button' id={props.id}>
      <Link to={props.link} className='lead-text'>
        {props.label}
      </Link>
    </button>
  )
}

export default ActionButton