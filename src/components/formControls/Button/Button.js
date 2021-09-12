import React from 'react'
import './Button.scss'

const Button = ({ type, children, variant, onClick, name }) => {
  return (
    <button type={type} className={`mw-button ${variant}`} onClick={onClick} name={name}>
      {children}
    </button>
  )
}

export default Button
