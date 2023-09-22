import React from 'react'

const Button = ({val,fn,disable=false}) => {
  return (
    <button onClick={fn} disabled={disable} className='btn btn-primary me-2'>{val}</button>
  )
}

export default Button