import React from 'react'

const TextField = ({lbl, inputref,val}) => {
  if(val)inputref.current.value = val
  console.log("textfield :"+val);
    const placeholder = `Type ${lbl}`
  return (
    <div>
        <label>{lbl}</label>
        <input ref={inputref} className='form-control' type="text" placeholder={placeholder}/>
    </div>
  )
}

export default TextField