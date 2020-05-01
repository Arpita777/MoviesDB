import React from 'react'

const Input = ({name,value,label,onChange,error,type}) =>{
  return(
     <div className='form-group'>
           <label htmlFor='username'>{label}</label>
           <input 
             onChange={onChange}
             value={value}
             name={name}
             className='form-control'
             type={type}
            />
      {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  )
}
export default Input