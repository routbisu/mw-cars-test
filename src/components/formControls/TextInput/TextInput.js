import React from 'react'
import './TextInput.scss'

const TextInput = ({ name, label }) => {
  return (
    <div className="text-input-container">
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} />
    </div>
  )
}

export default TextInput
