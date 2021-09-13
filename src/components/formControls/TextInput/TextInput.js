import React from 'react'
import { useField } from 'formik'
import './TextInput.scss'

const TextInput = ({ label, ...rest }) => {
  const [field, meta] = useField(rest)
  const errored = meta.touched && meta.error

  return (
    <div className="text-input-container">
      <label htmlFor={field.name}>{label}</label>
      <input type="text" {...field} {...rest} className={errored && 'errored'} />
      {errored && <div className="error">{meta.error}</div>}
    </div>
  )
}

export default TextInput
